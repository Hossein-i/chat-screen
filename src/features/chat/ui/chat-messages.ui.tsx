"use client";

import { ScrollShadow } from "@heroui/react";
import { Message } from "../types";
import { ChatMessageUI } from "./chat-message.ui";

export interface ChatMessagesUIProps {
  currentUser?: { id: string; name: string };
  messages: Record<string, Message>;
  onReplyClick: (message: Message | null) => void;
  onRetryClick: (message: Message) => void;
  onNavigateToMessage: (messageId: string) => void;
}

export const ChatMessagesUI: React.FC<ChatMessagesUIProps> = (props) => {
  const {
    currentUser,
    messages,
    onReplyClick,
    onRetryClick,
    onNavigateToMessage,
  } = props;

  return (
    <ScrollShadow id="messages" className="flex-1 overflow-x-hidden px-1">
      <ul className="flex flex-col gap-2">
        {Array.from(Object.entries(messages)).map(([key, message]) => (
          <li key={`message-${key}`} id={`message-${key}`}>
            <ChatMessageUI
              key={message.id}
              currentUser={currentUser}
              message={message}
              onReplyClick={onReplyClick}
              onRetryClick={onRetryClick}
              onNavigateToMessage={onNavigateToMessage}
            />
          </li>
        ))}
      </ul>
    </ScrollShadow>
  );
};
