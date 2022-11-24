import { combineReducers } from "redux";
// import { createReducer, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "./characters-operations";
// import changeFilter from "./characters-actions";

// -------reducer for CHARACTERS---------------------------------------------------------------------------
// -------- 2 -- with Redax Toolkit + createSlice ---------------------------------------------------
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const characters = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCharacters.fulfilled, (state, { payload }) => {
        state.loading = true;
        state.items = payload;
      })
      .addCase(getCharacters.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// // // ------- 1 -- with Redax Toolkit + createReducer + ("Map Object" Notation) ----------
// const characters = createReducer([], {
//   [getCharacters.fulfilled]: (_, { payload }) => {
//     return payload;
//   },
// });

// -------reducer for FILTER---------------------------------------------------------------------------
// -------- 4 -- with Redax Toolkit + createSlice ---------------------------------------------------
// Для createSlice нам не треба створювати actions, createSlice створює під капотом і actions, і redusers
const filter = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter: (_, { payload }) => payload,
  },
});

// console.log("filter Slice", filter);
// console.log("filter Actions", filter.actions);

// // ------- 3 -- with Redax Toolkit + createReducer + builder ("Builder Callback" Notation) ----------
// const filter = createReducer("", (builder) => {
//   builder.addCase(changeFilter, (_, { payload }) => payload);
// });

// // ------- 2 -- with Redax Toolkit + createReducer + ("Map Object" Notation) ----------------------
// // console.dir(changeFilter);
// // console.dir(changeFilter.type); // повертає "characters/changeFilter"

// // console.dir(changeFilter.toString()); // повертає "characters/changeFilter"
// // [changeFilter] - ключ в об'єкті за замовчуванням буде приведений до строки,
// // тому ми можемо не писати [changeFilter.toString()]; // повертає "characters/changeFilter"
// const filter = createReducer("", {
//   // [changeFilter]: (state, { payload }) => payload,
//   [changeFilter]: (_, { payload }) => payload,
// });

// // ------ 1-- with Vanila Redux -----------------------------------------------------------------
// const filter = (state = "", action) => {
//   switch (action.type) {
//     case "characters/changeFilter":
//       return action.payload;

//     default:
//       return state;
//   }
// };

export const { changeFilter } = filter.actions;

// export default combineReducers({
//   characters,
//   filter: filter.reducer,
// });

export default combineReducers({
  characters: characters.reducer,
  filter: filter.reducer,
});
