import { createSlice } from '@reduxjs/toolkit';
import { TeamsState } from '@shared/types/teams';
import { loadTeams } from './thunks';

const initialState: TeamsState = {
  data: {
    count: 0,
    filters: {
      offset: 0,
      limit: 5,
    },
    teams: [],
  },
  status: 'pending',
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadTeams.fulfilled, (state, action) => {
      state.data = {
        ...action.payload,
        teams: [...state.data.teams, ...action.payload.teams],
      };
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
