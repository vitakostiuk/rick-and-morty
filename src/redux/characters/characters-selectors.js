const getAllCharacters = (state) => state.characters.characters.items;
const getQuery = (state) => state.characters.characters.query;
const getFilter = (state) => state.characters.filter;

export { getAllCharacters, getFilter, getQuery };
