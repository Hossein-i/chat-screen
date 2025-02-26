"use client";

import {
  ArrowPathIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";
import { Message } from "../types";
import { ChatStatusUI } from "./chat-status.ui";
import { ReplyMessageUI } from "./reply-message.ui";

export interface ChatMessageUIProps {
  currentUser?: { id: string; name: string };
  message: Message;
  onReplyClick: (message: Message | null) => void;
  onRetryClick: (message: Message) => void;
  onNavigateToMessage: (messageId: string) => void;
}

export const ChatMessageUI: React.FC<ChatMessageUIProps> = (props) => {
  const {
    currentUser,
    message,
    onReplyClick,
    onRetryClick,
    onNavigateToMessage,
  } = props;
  const { user, text, status, replyTo } = message;

  const isSameUser = currentUser?.id === user.id;

  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <Card
        className={`w-fit max-w-[75%] overflow-visible ${isSameUser ? "me-2 ms-auto bg-gradient-to-br from-primary to-secondary text-white" : "me-auto"}`}
      >
        {isSameUser ? (
          replyTo && (
            <CardHeader className="pb-0 text-start">
              <ReplyMessageUI
                name={replyTo.user.name}
                text={replyTo.text}
                onPress={() => onNavigateToMessage(replyTo.id)}
              />
            </CardHeader>
          )
        ) : (
          <CardHeader className="pb-0 text-start">
            <div className="flex flex-auto flex-col">
              <span className="text-primary">{message.user.name}</span>
              {replyTo && (
                <ReplyMessageUI
                  name={replyTo.user.name}
                  text={replyTo.text}
                  color="primary"
                  onPress={() => onNavigateToMessage(replyTo.id)}
                />
              )}
            </div>
          </CardHeader>
        )}
        <CardBody className="items-end">
          <p className="w-full whitespace-pre">{text}</p>
          {isSameUser && <ChatStatusUI status={status} />}
        </CardBody>

        <div
          className={`absolute bottom-0 ${isSameUser ? "-start-6 -translate-x-1/2" : "-end-6 translate-x-1/2"}`}
        >
          {status === "sent" && (
            <Button
              size="sm"
              radius="full"
              onPress={() => onReplyClick(message)}
              isIconOnly
            >
              <ArrowUturnRightIcon className="h-4 w-4" />
            </Button>
          )}
          {isSameUser && status === "failed" && (
            <Button
              size="sm"
              radius="full"
              onPress={() => onRetryClick(message)}
              isIconOnly
            >
              <ArrowPathIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
