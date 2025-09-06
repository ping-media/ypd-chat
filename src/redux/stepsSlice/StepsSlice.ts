import { createSlice } from "@reduxjs/toolkit";

export interface StepState {
  steps: any;
}

const initialState: StepState = {
  steps: {},
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    handleAddSteps: (state, action) => {
      state.steps = action.payload;
    },
  },
});

export const { handleAddSteps } = stepsSlice.actions;
export default stepsSlice.reducer;
