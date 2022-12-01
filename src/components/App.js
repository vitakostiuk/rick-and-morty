import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import CharactersPage from "./pages/CharactersPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { getIsLoggedIn } from "../redux/auth/authSelectors";

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = localStorage.getItem("fblst_519590290217663");

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn || token ? <CharactersPage /> : <LoginPage />}
      ></Route>
      <Route
        path="/:id"
        element={isLoggedIn || token ? <SingleCharacterPage /> : <LoginPage />}
      ></Route>
      <Route
        path="*"
        element={isLoggedIn || token ? <NotFoundPage /> : <LoginPage />}
      ></Route>
    </Routes>
  );
}

export default App;
