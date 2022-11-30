import { Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />}></Route>
      <Route path="/:id" element={<SingleCharacterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
