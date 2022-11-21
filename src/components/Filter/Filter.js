import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/characters/characters-selectors";
import changeFilter from "../../redux/characters/characters-actions";

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);
  return (
    <div>
      <label htmlFor="1">Find character by name</label>
      <input
        type="text"
        value={value}
        id="1"
        // className={s.Input}
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
      />
    </div>
  );
};

export default Filter;
