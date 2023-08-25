import { create, Message, Whatsapp } from "venom-bot"

import { handleIncomingMessage } from "./services/chatService"
import { normalizePhoneNumber } from "./utils/normalizePhoneNumber"

create({
  session: "openai-whatsapp-bot",
  disableWelcome: true,
})
  .then(async (client: Whatsapp) => await start(client))
  .catch((err) => {
    console.log(err)
  })

  async function start(client: Whatsapp) {
    client.onMessage(async (message: Message) => {
      if (!message.body || message.isGroupMsg) return
  
      const customerPhone = normalizePhoneNumber(message.from)
      const customerName = message.author
  
      await handleIncomingMessage(client, customerPhone, customerName, message)
    });
  }
