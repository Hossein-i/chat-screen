import { Message } from "./message.type";

export type ChatState = {
  messages: Record<string, Message>;
  replyTo: Message | null;
  status: "idle" | "connected" | "disconnected" | "error";
  error: string | null;
};
