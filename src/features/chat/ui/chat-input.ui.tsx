"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Form, Textarea } from "@heroui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Message } from "../types";
import { ReplyMessageUI } from "./reply-message.ui";

export interface ChatInputUIProps {
  replyTo: Message | null;
  onSendMessage: (text: string) => void;
  onReplyClick: (message: Message | null) => void;
  onNavigateToMessage: (messageId: string) => void;
}

export const ChatInputUI: React.FC<ChatInputUIProps> = (props) => {
  const { replyTo, onSendMessage, onReplyClick, onNavigateToMessage } = props;
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const message = data.message.toString();

    if (message === undefined || message.trim() === "") {
      if (messageRef.current) {
        messageRef.current.focus();
      }

      return;
    }

    onSendMessage(data.message.toString());

    event.currentTarget.reset();
  };

  return (
    <Card>
      <CardBody>
        <Form onSubmit={handleSubmit} autoComplete="off">
          {replyTo && (
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-full"
            >
              <ReplyMessageUI
                name={replyTo.user.name}
                text={replyTo.text}
                color="primary"
                onPress={() => onNavigateToMessage(replyTo.id)}
                onClose={() => onReplyClick(null)}
              />
            </motion.div>
          )}

          <div className="flex w-full gap-2">
            <Textarea
              ref={messageRef}
              placeholder="Message..."
              name="message"
              classNames={{ inputWrapper: "h-auto" }}
              minRows={1}
              autoFocus
            />
            <Button type="submit" color="primary" radius="full" isIconOnly>
              <PaperAirplaneIcon className="h-4 w-4" />
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};
