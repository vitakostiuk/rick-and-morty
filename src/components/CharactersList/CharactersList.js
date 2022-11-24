import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters } from "../../redux/characters/characters-operations";
import {
  getAllCharacters,
  getFilter,
} from "../../redux/characters/characters-selectors";

const CharactersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const characters = useSelector(getAllCharacters);
  // console.log("characters", characters);

  const filter = useSelector(getFilter).toLowerCase();

  const filteredCharactres = characters.filter((character) =>
    character.name.toLowerCase().includes(filter)
  );

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
    </div>
  );
};

export default CharactersList;
