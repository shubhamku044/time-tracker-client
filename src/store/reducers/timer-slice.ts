import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITimerState {
  id: string;
  startTime: string;
  endTime: string;
  desc: string;
  projectName: string;
  timeWorked: string;
}

type InitialStateType = {
  value: Array<ITimerState>;
}

const initialState: InitialStateType = {
  value: [],
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    logger: (state) => {
      console.log(state);
    },
    addTimeStamps: (state, action: PayloadAction<ITimerState>) => {
      state.value.push(action.payload);
    },
    deleteTimeStamp: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.value = state.value.filter(({id}) => id !== action.payload);
    },
  }
});

export const { logger, addTimeStamps, deleteTimeStamp } = timerSlice.actions;

export default timerSlice.reducer;
