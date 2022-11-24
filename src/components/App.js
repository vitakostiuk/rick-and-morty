import { Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />}></Route>
      <Route path="/:id" element={<SingleCharacterPage />}></Route>
    </Routes>
  );
}

export default App;
