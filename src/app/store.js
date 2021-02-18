import photoReducer from "features/Photos/photoSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  photos: photoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
