import { configureStore } from "@reduxjs/toolkit";
import authentificationReducer from "../features/authentification/authentificationSlice";

const store = configureStore({
  reducer: authentificationReducer,
});

export default store;
