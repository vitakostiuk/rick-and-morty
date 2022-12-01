import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import CharactersPage from "./pages/CharactersPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { getIsLoggedIn } from "../redux/auth/authSelectors";
// import React from "react";
// import FacebookLogin from "react-facebook-login";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/auth/authSlice";

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const tokenFb = localStorage.getItem("fblst_519590290217663");
  const tokenGoogle = localStorage.getItem("oauth2_ss");
  console.log("tokenGoogle", tokenGoogle);
  // const dispatch = useDispatch();

  // const thirdPartyLoginHandler = ({ response, provider, error }) => {
  //   console.log(" response>>", response);
  //   console.log(" provider>>", provider);
  //   console.log(" error>>", error);
  //   dispatch(login({ user: response, provider, error }));
  // };

  // const responseFacebook = (response) => {
  //   console.log("response >>>", response);
  //   if (
  //     response.status === "unknown" ||
  //     response.status === undefined ||
  //     response.error
  //   )
  //     return thirdPartyLoginHandler({
  //       error: true,
  //       provider: "facebook",
  //       response: {},
  //     });

  //   thirdPartyLoginHandler({ error: false, provider: "facebook", response });
  // };
  return (
    // <div>
    //   <h1>Login</h1>
    //   <FacebookLogin
    //     appId="519590290217663"
    //     // autoLoad={true}
    //     fields="name,email,picture"
    //     // cssClass={classes.login__btn}
    //     callback={responseFacebook}
    //     textButton="Login with Facebook"
    //   />
    // </div>
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn || tokenFb || tokenGoogle ? (
            <CharactersPage />
          ) : (
            <LoginPage />
          )
        }
      ></Route>
      <Route
        path="/:id"
        element={
          isLoggedIn || tokenFb || tokenGoogle ? (
            <SingleCharacterPage />
          ) : (
            <LoginPage />
          )
        }
      ></Route>
      <Route
        path="*"
        element={
          isLoggedIn || tokenFb || tokenGoogle ? (
            <NotFoundPage />
          ) : (
            <LoginPage />
          )
        }
      ></Route>
    </Routes>
  );
}

export default App;
