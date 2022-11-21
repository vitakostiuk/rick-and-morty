import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  console.log(characters);

  const filter = useSelector(getFilter).toLowerCase();

  const filteredCharactres = characters.filter((character) =>
    character.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <ul>
        {characters &&
          filteredCharactres.map(({ name, image }) => (
            <li>
              <h3>{name}</h3>
              <img src={image} alt={name} width="100px" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CharactersList;
