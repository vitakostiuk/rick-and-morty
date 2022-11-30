import { Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";
import NotFoundPage from "./pages/NotFoundPage";
// import LoginPage from "./pages/LoginPage";
import React from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  const thirdPartyLoginHandler = ({ response, provider, error }) => {
    console.log(" response>>", response);
    console.log(" provider>>", provider);
    console.log(" error>>", error);
    dispatch(login({ user: response, provider, error }));
  };

  const responseFacebook = (response) => {
    console.log("response >>>", response);
    if (
      response.status === "unknown" ||
      response.status === undefined ||
      response.error
    )
      return thirdPartyLoginHandler({
        error: true,
        provider: "facebook",
        response: {},
      });

    thirdPartyLoginHandler({ error: false, provider: "facebook", response });
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Login</h1>
            <FacebookLogin
              appId="519590290217663"
              // autoLoad={true}
              fields="name,email,picture"
              // cssClass={classes.login__btn}
              callback={responseFacebook}
              textButton="Login with Facebook"
            />
          </div>
        }
      ></Route>
      <Route path="/characters" element={<CharactersPage />}></Route>
      <Route path="/characters/:id" element={<SingleCharacterPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
