"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { Message } from "../types";

export interface ChatStatusUIProps {
  status: Message["status"];
}

export const ChatStatusUI: React.FC<ChatStatusUIProps> = (props) => {
  const { status } = props;

  switch (status) {
    case "sending":
      return <>...</>;
    case "sent":
      return <CheckIcon className="h-4 w-4" />;
    case "failed":
      return <>!</>;
    default:
      return <>?</>;
  }
};
