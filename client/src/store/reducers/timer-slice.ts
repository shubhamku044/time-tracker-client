import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  loading: boolean;
  error: boolean | null;
}

export const getTimerData = createAsyncThunk('timer', async () => {
  try {
    const data: Array<ITimerState> = [];
    const querySnapshot = await getDocs(collection(db, 'timer'));
    querySnapshot.forEach((doc) => {
      console.log('Fetching data...');
      const chunk = { id: doc.id, ...doc.data() } as ITimerState;
      data.push(chunk);
    });

    console.log(data);

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
      state.value = state.value.filter(({ id }) => id !== action.payload);
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
