import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatSocket } from "../api/sockets";
import { ChatState, Message } from "../types";

const initialState: ChatState = {
  messages: {
    "msg-01": {
      id: "msg-01",
      user: { id: "Hossein-i", name: "Hossein-i" },
      status: "sent",
      text: "Hello World.",
      replyTo: null,
    },
    "msg-02": {
      id: "msg-02",
      user: { id: "Hossein-i", name: "Hossein-i" },
      status: "sent",
      text: "Its Work!",
      replyTo: {
        id: "msg-01",
        user: { id: "Hossein-i", name: "Hossein-i" },
        status: "sent",
        text: "Hello World.",
        replyTo: null,
      },
    },
  },
  replyTo: null,
  status: "idle",
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages[action.payload.id] = action.payload;
    },
    updateMessageStatus: (state, action: PayloadAction<Message>) => {
      state.messages[action.payload.id] = action.payload;
    },
    receiveMessage: (state, action: PayloadAction<Message>) => {
      state.messages[action.payload.id] = action.payload;
    },
    setReplyTo: (state, action: PayloadAction<ChatState["replyTo"]>) => {
      state.replyTo = action.payload;
    },
    setStatus: (state, action: PayloadAction<ChatState["status"]>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<ChatState["error"]>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setReplyTo,
  addMessage,
  updateMessageStatus,
  receiveMessage,
  setStatus,
  setError,
} = chatSlice.actions;
export const chatReducer = chatSlice.reducer;

export const sendMessage = createAsyncThunk(
  "chat/send-message",
  async (
    payload: { message: Message; chatSocket: ChatSocket },
    { dispatch },
  ) => {
    const { message, chatSocket } = payload;

    dispatch(addMessage(message));

    const rcvMsg = await chatSocket.sendMessage(message);

    dispatch(updateMessageStatus(rcvMsg));
  },
);
