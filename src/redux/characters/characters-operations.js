// -------- 2 -- with Redax Toolkit ---------------------------------------------------
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

const getCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (page = 1, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/character/?page=${page}`);

      // console.log("data.results", data.results);
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { getCharacters };
