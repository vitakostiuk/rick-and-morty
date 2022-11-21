import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characters/characters-reducer";

const store = configureStore({
  reducer: charactersReducer,
  devTools: process.env.NODE_ENV === "development",
});

export { store };
