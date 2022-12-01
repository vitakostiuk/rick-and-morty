import React, { useEffect } from "react";
import classes from "./Login.module.css";
import Box from "../../UI/Box";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  // Login with Google
  const clientId =
    "828146371625-viag1i2gitam5d877c4s4h8gem5vabsl.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (response) => {
    console.log("success:", response);
    dispatch(login({ user: response, provider: "google", error: false }));
  };
  const onFailure = (error) => {
    console.log("failed:", error);
    dispatch(login({ user: {}, provider: "google", error: true }));
  };

  // Login with Facebook
  const responseFacebook = (response) => {
    console.log("response >>>", response);
    if (
      response.status === "unknown" ||
      response.status === undefined ||
      response.error
    ) {
      dispatch(login({ user: {}, provider: "facebook", error: true }));
    }

    dispatch(login({ user: response, provider: "facebook", error: false }));
  };

  return (
    <Box className={classes.login}>
      <FacebookLogin
        appId="519590290217663"
        // autoLoad={true}
        fields="name,email,picture"
        cssClass={classes.login__btn}
        callback={responseFacebook}
        textButton="Login with Facebook"
      />

      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </Box>
  );
};

export default Login;
