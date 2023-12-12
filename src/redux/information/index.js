import { configureStore, combineReducers } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import myProfile from "../reducers/myProfile";
import token from "../reducers/token";
import cards from "../reducers/cards";

const rootReducer = combineReducers({
  myProfile: myProfile,
  token: token,
  cards: cards,
});

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const informationResult = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(informationResult);
