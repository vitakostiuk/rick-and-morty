import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

const getCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/character");
      console.log("data", data);

      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { getCharacters };
