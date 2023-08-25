import { Message, Whatsapp } from "venom-bot"
import { completion } from "../lib/openai"
import { redis } from "../lib/redis"
import { initPrompt } from "../utils/initPrompt"
import { CustomerChat } from "../models/customerChat"
import { storeName } from "../constants/storeName"

export async function handleIncomingMessage(
  client: Whatsapp,
  customerPhone: string,
  customerName: string,
  message: Message) {
  const customerKey = `customer:${customerPhone}:chat`
  const orderCode = `#${storeName}-${("00000" + Math.random()).slice(-5)}`

  const lastChat = JSON.parse((await redis.get(customerKey)) || "{}")

  const customerChat: CustomerChat =
    lastChat?.status === "open"
      ? (lastChat as CustomerChat)
      : {
        status: "open",
        orderCode,
        chatAt: new Date().toISOString(),
        customer: {
          name: customerName,
          phone: customerPhone,
        },
        messages: [
          {
            role: "system",
            content: initPrompt(storeName, orderCode),
          },
        ],
        orderSummary: "",
      }

  customerChat.messages.push({
    role: "user",
    content: message.body,
  })

  const content =
    (await completion(customerChat.messages)) || "I didn't quite catch that..."

  customerChat.messages.push({
    role: "assistant",
    content,
  })

  await client.sendText(message.from, content)

  if (
    customerChat.status === "open" &&
    content.match(customerChat.orderCode)
  ) {
    customerChat.status = "closed"

    customerChat.messages.push({
      role: "user",
      content:
        `Generate an order summary for registration in the ${storeName} System, the requester is a robot.`,
    })

    const content =
      (await completion(customerChat.messages)) || "I didn't quite catch that..."

    customerChat.orderSummary = content
  }

  redis.set(customerKey, JSON.stringify(customerChat))
}