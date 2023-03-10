import { createSlice } from "@reduxjs/toolkit";

export const dataSetSlice = createSlice({
  name: "dataSet",
  initialState: {
    kasus: [],
    meninggal: [],
  },
  reducers: {
    addKasus: (state, action) => {
      state.kasus.push(action.payload);
    },
    addMeninggal: (state, action) => {
      state.meninggal.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addKasus, addMeninggal } = dataSetSlice.actions;

export default dataSetSlice.reducer;
