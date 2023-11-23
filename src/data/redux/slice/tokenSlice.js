import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: null,
  reducers: {
    setTokenDetails: (state, action) => action.payload,
    clearTokenDetails: (state) => null,
  },
});

export const { setTokenDetails, clearTokenDetails } = tokenSlice.actions;
export default tokenSlice.reducer;
