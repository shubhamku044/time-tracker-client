import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ITimerState } from './timer-slice';

const apiUrl = new URL(import.meta.env.VITE_API_KEY as string);

interface IProjectsState {
  _id: string;
  name: string;
  tasks: Array<ITimerState>
}

type InitialStateType = {
  value: Array<IProjectsState>;
  loading: boolean;
  error: boolean | null;
}

export const getProjectsData = createAsyncThunk('projects', async () => {
  try {
    const rawTasksData = await fetch(`${apiUrl}/projects`);
    const jsonData = await rawTasksData.json();
    const data: Array<IProjectsState> = jsonData.projects;
    return data;
  } catch (err) {
    console.log('Err while getting all the projects', err);
  }
});

const initialState: InitialStateType = {
  value: [],
  loading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    logger: (state) => {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectsData.fulfilled, (state, action: PayloadAction<any>) => {
        state.value = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getProjectsData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export const { logger } = projectsSlice.actions;

export default projectsSlice.reducer;
