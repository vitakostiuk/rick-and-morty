import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/characters/characters-selectors";
// import changeFilter from "../../redux/characters/characters-actions"; // для createReducer
import { changeFilter } from "../../redux/characters/characters-reducer"; // для createSlice

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);
  return (
    <div>
      <label htmlFor={nanoid()}>Find character by name</label>
      <input
        type="text"
        value={value}
        id={nanoid()}
        // className={s.Input}
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
      />
    </div>
  );
};

export default Filter;
