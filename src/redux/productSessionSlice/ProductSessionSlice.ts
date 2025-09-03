import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  session_id: string;
  message: string;
  current_step: string;
  total_steps: number;
  first_step: string;
  estimated_duration: string;
  welcome_message: string;
}

const initialState: UserState = {
  session_id: "",
  message: "",
  current_step: "",
  total_steps: 0,
  first_step: "",
  estimated_duration: "",
  welcome_message: "",
};

const ProductSessionSlice = createSlice({
  name: "product-session",
  initialState,
  reducers: {
    addSession: (state, action) => {
      const {
        session_id,
        message,
        current_step,
        total_steps,
        estimated_duration,
        welcome_message,
      } = action.payload;

      state.session_id = session_id;
      state.message = message;
      state.current_step = current_step;
      state.total_steps = total_steps;
      state.estimated_duration = estimated_duration;
      state.welcome_message = welcome_message;
    },
    addNextStep: (state, action) => {
      state.first_step = action.payload;
    },
  },
});

export const { addSession, addNextStep } = ProductSessionSlice.actions;
export default ProductSessionSlice.reducer;
