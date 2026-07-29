import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: "",
  jwt: "",
};

const authentificationSLice = createSlice({
  name: "authentification",
  initialState,
  reducers: {
    token_search: (state, action) => {
      state.jwt = action.payload;
    },
    profile_search: (state, action) => {
      state.profile = action.payload;
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
export const { token_search, profile_search } = authentificationSLice.actions;

export default authentificationReducer;
