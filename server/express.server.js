import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

export const app = express();
export const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://chat-screen.hossein-i.ir/"],
  },
});

io.on("connection", (socket) => {
  console.log("[Socket.IO]: ", "\na user connected ", "\n");

  socket.on("send-message", (message, callback) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      if (isSuccess) {
        io.emit("receive-message", { ...message, status: "sent" });
        callback({ ...message, status: "sent" });
      } else {
        callback({ ...message, status: "failed" });
      }
    }, 1000);
  });

  socket.on("disconnect", () => {
    console.log("[Socket.IO]: ", "\nuser disconnected ", "\n");
  });
});

server.listen(3001, () => {
  console.log(
    "[Socket.IO]: ",
    "\n   * server is running ",
    "\n   - Local:        http://localhost:3001 ",
    "\n",
  );
});
