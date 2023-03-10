import { configureStore } from "@reduxjs/toolkit";
import dataSetReducers from "./DataSlice";
export const store = configureStore({
  reducer: {
    dataSet: dataSetReducers,
  },
});
