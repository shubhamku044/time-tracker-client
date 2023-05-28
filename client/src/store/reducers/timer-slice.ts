import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const apiUrl = new URL(import.meta.env.VITE_API_KEY as string);

interface ITimerState {
  _id: string;
  startTime: string;
  endTime: string;
  desc: string;
  projectName: string;
  duration: string;
  isRunning: boolean;
}

type InitialStateType = {
  value: Array<ITimerState>;
  loading: boolean;
  error: boolean | null;
}

export const getTimerData = createAsyncThunk('timer', async () => {
  try {
    const rawTasksData = await fetch(`${apiUrl}/tasks`);
    const jsonData = await rawTasksData.json();
    const data: Array<ITimerState> = jsonData.tasks;
    return data;
  } catch (err) {
    console.log('Err');
  }
});

const initialState: InitialStateType = {
  value: [],
  loading: false,
  error: null,
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
      state.value = state.value.filter(({ _id }) => _id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTimerData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTimerData.fulfilled, (state, action: PayloadAction<any>) => {
        state.value = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getTimerData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export const { logger, addTimeStamps, deleteTimeStamp } = timerSlice.actions;

export default timerSlice.reducer;
