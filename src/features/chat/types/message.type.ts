export type Message = {
  id: string;
  user: {
    id: string;
    name: string;
  };
  text: string;
  replyTo: Message | null;
  status: "sending" | "sent" | "failed";
};
