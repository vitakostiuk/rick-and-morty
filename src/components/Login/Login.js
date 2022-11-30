import React from "react";
import classes from "./Login.module.css";
import Box from "../../UI/Box";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";

const Login = () => {
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
    <Box className={classes.login}>
      <h1>Login</h1>
      <FacebookLogin
        appId="519590290217663"
        // autoLoad={true}
        fields="name,email,picture"
        cssClass={classes.login__btn}
        callback={responseFacebook}
        textButton="Login with Facebook"
      />
    </Box>
  );
};

export default Login;
