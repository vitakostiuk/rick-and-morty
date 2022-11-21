import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getCharacters } from "./characters-operations";
import changeFilter from "./characters-actions";

const characters = createReducer([], {
  [getCharacters.fulfilled]: (_, { payload }) => {
    return payload;
  },
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ characters, filter });
