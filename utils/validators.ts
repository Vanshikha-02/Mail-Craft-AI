import { EmailRequest } from "@/types/email";

export function validateForm(data: EmailRequest) {
  if (!data.purpose.trim()) return false;

  if (!data.recipient.trim()) return false;

  return true;
}