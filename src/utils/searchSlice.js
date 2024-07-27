import { createSlice } from "@reduxjs/toolkit";

const serachSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = { ...action.payload, ...state };
    },
  },
});

export default serachSlice.reducer;
export const { cacheResults } = serachSlice.actions;
