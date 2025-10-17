import { createSlice } from '@reduxjs/toolkit';
import { TeamsState } from '@shared/types/teams';
import { loadTeams } from './thunks';

const initialState: TeamsState = {
  data: [],
  status: 'pending',
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadTeams.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = action.meta.requestStatus;
    });
    builder.addCase(loadTeams.rejected, (state, action) => {
      state.status = action.meta.requestStatus;
    });
    builder.addCase(loadTeams.pending, (state, action) => {
      state.status = action.meta.requestStatus;
    });
  },
});
