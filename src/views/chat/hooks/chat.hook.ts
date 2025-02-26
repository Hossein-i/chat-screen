import { ChatSocket } from "@/features/chat/api/sockets";
import {
  receiveMessage,
  sendMessage,
  setError,
  setReplyTo,
  setStatus,
} from "@/features/chat/model";
import { Message } from "@/features/chat/types";
import { AppDispatch, RootState } from "@/shared/redux";
import {
  applyFadeEffect,
  getViewportHeightPercentage,
  navigateToId,
  scrollToBottomOfParent,
} from "@/shared/utils";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UseChatProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useChat = (props: UseChatProps = {}) => {
  const chatSocketRef = useRef<ChatSocket | null>(null);
  const [currentUser, setCurrentUser] = useState<
    { id: string; name: string } | undefined
  >();
  const { messages, replyTo, status, error } = useSelector(
    (state: RootState) => state.chat,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    chatSocketRef.current = new ChatSocket({
      onReceiveMessage: (message) => {
        dispatch(receiveMessage(message));
      },
      onError: (error) => {
        dispatch(setError(error.message));
      },
      onConnect: (socketId) => {
        if (socketId) {
          setCurrentUser({ id: socketId, name: `User-${socketId}` });
        }
        dispatch(setStatus("connected"));
      },
      onDisconnect: () => {
        dispatch(setStatus("disconnected"));
        setCurrentUser(undefined);
      },
    });

    chatSocketRef.current.connect();

    return () => {
      chatSocketRef.current?.disconnect();
    };
  }, [dispatch]);

  useEffect(() => {
    if (status === "connected") {
      scrollToBottomOfParent("messages");
    }
  }, [status]);

  const onSendMessage = (text: string) => {
    if (!chatSocketRef.current || !currentUser) {
      return;
    }

    dispatch(
      sendMessage({
        message: {
          id: Math.random().toString(),
          user: currentUser,
          text,
          status: "sending",
          replyTo,
        },
        chatSocket: chatSocketRef.current,
      }),
    ).then(() => {
      scrollToBottomOfParent("messages");
    });
    dispatch(setReplyTo(null));
  };

  const onReplyClick = (message: Message | null) => {
    dispatch(setReplyTo(message));
  };

  const onRetryClick = (message: Message) => {
    if (!chatSocketRef.current) {
      return;
    }

    dispatch(
      sendMessage({
        message: { ...message, status: "sending" },
        chatSocket: chatSocketRef.current,
      }),
    );
  };

  const onNavigateToMessage = (messageId: string) => {
    navigateToId(
      `message-${messageId}`,
      { offset: getViewportHeightPercentage(50) },
      "messages",
    );
    applyFadeEffect(`message-${messageId}`);
  };

  return {
    chatSocketRef,
    currentUser,
    messages,
    replyTo,
    status,
    error,
    dispatch,
    onSendMessage,
    onReplyClick,
    onRetryClick,
    onNavigateToMessage,
  };
};

export type UseChatReturn = ReturnType<typeof useChat>;
