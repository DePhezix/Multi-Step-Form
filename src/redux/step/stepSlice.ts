import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import step1 from "@/components/step1/step1";

export interface StepState {
  step1: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}

const initialState: StepState = {
  step1: {
    name: '',
    email: '',
    phoneNumber: '',
  }
};

export const stepSlice = createSlice({
  name: 'stepsInfo',
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<{
      stepNo: number;
      field: string;
      value: string
    }>) => {
      const { stepNo, field, value } = action.payload;
      state[`step${stepNo}` as keyof typeof state] = {
        ...state[`step${stepNo}` as keyof typeof state],
        [field]: value
      }
    }
  }
});

export const { setField } = stepSlice.actions;
export default stepSlice.reducer;