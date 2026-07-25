import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jwt: "",
};

const authentificationSLice = createSlice({
  name: "authentification",
  initialState,
  reducers: {
    token_search: (state, action) => {
      state.jwt = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("exempleExtraReducer", (state, action) => {
      state.jwt = action.payload;
    });
  },
});
console.log(authentificationSLice);

const authentificationReducer = authentificationSLice.reducer;
export const { token_search } = authentificationSLice.actions;

export default authentificationReducer;
