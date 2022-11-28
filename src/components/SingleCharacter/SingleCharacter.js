import { getAllCharacters } from "../../redux/characters/characters-selectors";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const SingleCharacter = () => {
  const characters = useSelector(getAllCharacters);
  // console.log("characters", characters);

  const navigate = useNavigate();
  const { id } = useParams();

  const filteredCharacter = characters.find(
    (character) => character.id === Number(id)
  );
  // console.log("filteredCharacter", filteredCharacter);
  const { name, species, gender, status, created, image, episode, location } =
    filteredCharacter;

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      {characters && (
        <div>
          <h3>{name}</h3>
          <img src={image} alt={name} width="100px" />
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <div>
            <p>Name: {location.name}</p>
            <p>Url: {location.url}</p>
          </div>
          <ul>
            Episodes:
            {episode.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>Status: {status}</p>
          <p>Created: {created}</p>
        </div>
      )}
    </>
  );
};

export default SingleCharacter;
