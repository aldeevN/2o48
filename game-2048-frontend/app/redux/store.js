import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices.js";
import { persistReducer } from "redux-persist";
import storage from "./customStorage";

const rootReducer = combineReducers({
    auth: authSlice.reducer,
});

const persistedReducer = persistReducer(
    {
        key: "root",
        version: 1,
        storage: storage,
    },
    rootReducer,
);
export const store = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false }),
    });
};

if (typeof window !== "undefined") {
    store().subscribe(() => {
        localStorage.setItem("myState", JSON.stringify(store));
        console.log(JSON.stringify(store))
    });
}

