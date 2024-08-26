import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../constants";

export const chatSlice = createSlice({
  initialState: {
    messages: [],
  },
  name: "chat",
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 40);
      state.messages.push(action.payload);
    },
  },
});
export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
