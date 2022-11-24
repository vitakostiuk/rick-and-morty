// ------ with Redax Toolkit-------
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import charactersReducer from "./characters/characters-reducer";

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer: charactersReducer,
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
