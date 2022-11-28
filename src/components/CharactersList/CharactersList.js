import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import { Link, NavLink } from "react-router-dom";
import { getCharacters } from "../../redux/characters/characters-operations";
import {
  getAllCharacters,
  getFilter,
} from "../../redux/characters/characters-selectors";

const CharactersList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch, page]);

  const characters = useSelector(getAllCharacters);
  // console.log("characters", characters);

  const filter = useSelector(getFilter).toLowerCase();

  const filteredCharactres = characters.filter((character) =>
    character.name.toLowerCase().includes(filter)
  );

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleChangePage = (event, page) => {
    console.log("event", event);
    console.log("page", page);
    setPage(page);
  };

  return (
    <div>
      <ul>
        {characters &&
          filteredCharactres.map(({ name, image, id, status }) => (
            <li key={id}>
              <Link to={{ pathname: `${id}` }}>
                {" "}
                <h3>{name}</h3>
                <p>{status}</p>
                <img src={image} alt={name} width="100px" />
              </Link>
            </li>
          ))}
      </ul>
      <button type="button" onClick={onLoadMore}>
        Load more
      </button>
      <Stack spacing={2}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChangePage}
          renderItem={(item) => (
            <PaginationItem
              component={NavLink}
              to={`/?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default CharactersList;
