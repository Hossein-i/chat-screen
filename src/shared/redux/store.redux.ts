import { chatReducer } from "@/features/chat/model";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
