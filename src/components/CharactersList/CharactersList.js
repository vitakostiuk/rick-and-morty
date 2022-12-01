import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import {
  getCharacters,
  searchCharacter,
} from "../../redux/characters/characters-operations";
import {
  getAllCharacters,
  getFilter,
  getQuery,
} from "../../redux/characters/characters-selectors";

const CharactersList = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = localStorage.getItem("fblst_519590290217663");

  let navigate = useNavigate();

  const [pageAllCharactes, setPageAllCharactes] = useState(1);
  const [pageSingleCharacter, setPageSingleCharacter] = useState(1);

  const dispatch = useDispatch();

  const characters = useSelector(getAllCharacters);
  // console.log("characters", characters);

  const filter = useSelector(getFilter).toLowerCase();

  useEffect(() => {
    if (filter !== "") return;

    setPageSingleCharacter(1);
    if (token !== null || isLoggedIn) {
      navigate({ search: `page=${pageAllCharactes}` });
    }

    dispatch(getCharacters(pageAllCharactes));
  }, [dispatch, filter, isLoggedIn, navigate, pageAllCharactes, token]);

  useEffect(() => {
    if (filter === "") return;

    setPageAllCharactes(1);
    if (token !== null || isLoggedIn) {
      navigate({ search: `page=${pageSingleCharacter}` });
    }

    const queryParams = {
      page: pageSingleCharacter,
      name: filter,
    };
    dispatch(searchCharacter(queryParams));
  }, [dispatch, filter, isLoggedIn, navigate, pageSingleCharacter, token]);

  const query = useSelector(getQuery);
  // console.log("query", query);

  const filteredCharactres = characters.filter((character) =>
    character.name.toLowerCase().includes(filter)
  );

  const onLoadMoreAll = () => {
    setPageAllCharactes((prevPage) => prevPage + 1);
  };

  const onLoadMoreSingle = () => {
    setPageSingleCharacter((prevPage) => prevPage + 1);
  };

  const handleChangePageAll = (event, page) => {
    setPageAllCharactes(page);

    if (token !== null || isLoggedIn) {
      navigate({ search: `page=${page}` });
    }
  };

  const handleChangePageSingle = (event, page) => {
    setPageSingleCharacter(page);

    if (token !== null || isLoggedIn) {
      navigate({ search: `page=${page}` });
    }
  };

  return (
    <>
      {characters && filter === "" && (
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
          <button type="button" onClick={onLoadMoreAll}>
            Load more
          </button>
          <Stack spacing={2}>
            <Pagination
              count={42}
              variant="outlined"
              shape="rounded"
              page={pageAllCharactes}
              onChange={handleChangePageAll}
            />
          </Stack>
        </div>
      )}

      {query && filter !== "" && (
        <div>
          <ul>
            {query &&
              query.map(({ name, image, id, status }) => (
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
          <button type="button" onClick={onLoadMoreSingle}>
            Load more
          </button>
          <Stack spacing={2}>
            <Pagination
              count={42}
              variant="outlined"
              shape="rounded"
              page={pageSingleCharacter}
              onChange={handleChangePageSingle}
            />
          </Stack>
        </div>
      )}

      {(characters.length === 0 || query.length === 0) && (
        <div>Empty result</div>
      )}
    </>
  );
};

export default CharactersList;
