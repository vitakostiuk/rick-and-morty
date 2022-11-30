const getIsLoggedIn = (state) => !!state.auth.user.accessToken; // приводит к булю (залогинен юзер или нет)
const getToken = (state) => state.auth.user.accessToken;

export { getIsLoggedIn, getToken };
