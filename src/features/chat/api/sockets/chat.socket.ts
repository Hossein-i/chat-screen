import { io, Socket } from "socket.io-client";
import { Message } from "../../types";

export type ChatSocketCallbacks = {
  onReceiveMessage: (receiveMessage: Message) => void;
  onError: (error: Error) => void;
  onConnect: (socketId?: string) => void;
  onDisconnect: () => void;
};

export class ChatSocket {
  private socket: Socket | null = null;
  private callbacks: ChatSocketCallbacks;

  constructor(callbacks: ChatSocketCallbacks) {
    this.callbacks = callbacks;
  }

  connect() {
    this.socket = io("http://localhost:3001");

    this.socket.on("connect", () => {
      this.callbacks.onConnect(this.socket?.id);
    });

    this.socket.on("disconnect", () => {
      this.callbacks.onDisconnect();
    });

    this.socket.on("receive-message", (message: Message) => {
      this.callbacks.onReceiveMessage(message);
    });

    this.socket.on("connect_error", (error: Error) => {
      this.callbacks.onError(error);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  sendMessage(message: Message) {
    return new Promise<Message>((resolve, reject) => {
      if (this.socket && this.socket.connected) {
        this.socket.emit("send-message", message, (response: Message) => {
          resolve(response);
        });
      } else {
        reject();
      }
    });
  }
}
