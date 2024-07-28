import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    assetName: string;
    assetNumber: string;
  };
}

const initialState: CounterState = {
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    assetName: "",
    assetNumber: "",
  },
};

export const stepperSlice = createSlice({
  name: "stepper Data",
  initialState,
  reducers: {
    setUserDetail: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetail } = stepperSlice.actions;

export default stepperSlice.reducer;
