export function normalizePhoneNumber(whatsappPhoneNumber: string): string {
  return `+${whatsappPhoneNumber.replace("@c.us", "")}`
}
