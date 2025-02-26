"use client";

import {
  ChatBackgroundUI,
  ChatInputUI,
  ChatMessagesUI,
  ChatTopBarUI,
} from "@/features/chat/ui";
import { ScrollToBottomButtonUI } from "@/shared/ui/scroll-to-bottom-button";
import { useChat } from "../hooks";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ChatUIProps {}

export const ChatUI: React.FC<ChatUIProps> = () => {
  const {
    currentUser,
    messages,
    replyTo,
    status,
    onSendMessage,
    onReplyClick,
    onRetryClick,
    onNavigateToMessage,
  } = useChat();

  return (
    <section className="h-dvh p-4">
      <section className="relative flex h-full flex-col gap-2 overflow-hidden rounded-2xl p-4">
        <ChatBackgroundUI />
        {(status === "disconnected" || status === "error") && (
          <div className="rounded-full bg-background p-1 text-center">
            Connection error. Please try again.
          </div>
        )}
        <ChatTopBarUI />
        <ChatMessagesUI
          currentUser={currentUser}
          messages={messages}
          onReplyClick={onReplyClick}
          onRetryClick={onRetryClick}
          onNavigateToMessage={onNavigateToMessage}
        />
        <ScrollToBottomButtonUI
          parentId="messages"
          className="bottom-24 end-10"
        />
        <ChatInputUI
          replyTo={replyTo}
          onSendMessage={onSendMessage}
          onReplyClick={onReplyClick}
          onNavigateToMessage={onNavigateToMessage}
        />
      </section>
    </section>
  );
};
