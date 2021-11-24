import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedIn } = authSlice.actions;

export default authSlice.reducer;
