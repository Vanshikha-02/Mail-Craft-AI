export type EmailTone =
  | "Professional"
  | "Friendly"
  | "Formal"
  | "Persuasive"
  | "Apology"
  | "Thank You"
  | "Follow Up"
  | "Sales";

export interface EmailRequest {
  purpose: string;
  recipient: string;
  tone: EmailTone;
  additionalInfo: string;
}

export interface EmailResponse {
  subject: string;
  body: string;
}