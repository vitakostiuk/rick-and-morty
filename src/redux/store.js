// ------ with Redax Toolkit-------
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import authSlice from "./auth/authSlice";
import charactersReducer from "./characters/characters-reducer";

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const persistAuthConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  characters: charactersReducer,
  auth: persistReducer(persistAuthConfig, authSlice),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

// // ----- with Vanila Redux ------
// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import charactersReducer from "./characters/characters-reducer";

// const rootReducer = combineReducers({
//   characters: charactersReducer,
// });

// const store = createStore(rootReducer, devToolsEnhancer());

// export { store };
