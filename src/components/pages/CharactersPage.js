import React from "react";
import CharactersList from "components/CharactersList";
import Filter from "components/Filter";

const CharactersPage = () => {
  return (
    <>
      <Filter />
      <CharactersList />
    </>
  );
};

export default CharactersPage;
