import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import daySlice from "./daySlice";

const store = configureStore({
  reducer: {
    meteoCity: mainSlice,
    daySlice: daySlice,
  },
});

export default store;
