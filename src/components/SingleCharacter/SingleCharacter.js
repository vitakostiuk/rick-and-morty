import { getAllCharacters } from "../../redux/characters/characters-selectors";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const SingleCharacter = () => {
  const characters = useSelector(getAllCharacters);
  console.log("characters", characters);

  // const location = useLocation();
  // console.log(
  //   "location",
  //   location.pathname.replaceAll("%20", " ").slice(1, -1)
  // );

  const navigate = useNavigate();
  const { id } = useParams();

  const filteredCharacter = characters.find((character) => character.id === id);
  console.log("filteredCharacter", filteredCharacter);
  const {
    name,
    species,
    gender,
    status,
    created,
    image,
    id: _id,
    episode,
    location,
  } = filteredCharacter;

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      {characters && (
        <div key={_id}>
          <h3>{name}</h3>
          <img src={image} alt={name} width="100px" />
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <div>
            <p>{location.name}</p>
            <p>{location.url}</p>
          </div>
          <ul>
            {episode.map((item) => (
              <li key={_id}>{item}</li>
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
