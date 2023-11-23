import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATE_USER } from "../constants";

const authSlice = createSlice({
  name: AUTHENTICATE_USER,
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      console.log(state, "STATE");
      console.log(action, "ACTION");
      state.isAuthenticated = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setAuthenticated } = authSlice.actions;
