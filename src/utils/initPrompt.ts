import { prompt } from "../prompts/hamburguerAgent"

export function initPrompt(storeName: string, orderCode: string): string {
  return prompt
    .replace(/{{[\s]?storeName[\s]?}}/g, storeName)
    .replace(/{{[\s]?orderCode[\s]?}}/g, orderCode)
}
