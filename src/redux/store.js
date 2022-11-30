// ------ with Redax Toolkit-------
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import authSlice from "./auth/authSlice";
import charactersReducer from "./characters/characters-reducer";

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const rootReducer = combineReducers({
  characters: charactersReducer,
  auth: authSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export { store };

// // ----- with Vanila Redux ------
// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import charactersReducer from "./characters/characters-reducer";

// const rootReducer = combineReducers({
//   characters: charactersReducer,
// });

// const store = createStore(rootReducer, devToolsEnhancer());

// export { store };
