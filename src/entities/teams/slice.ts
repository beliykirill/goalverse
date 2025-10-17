import { createSlice } from '@reduxjs/toolkit';
import { TeamsState } from '@shared/types/teams';
import { loadTeam, loadTeams } from './thunks';

const initialState: TeamsState = {
  teamByID: {},
  teams: [],
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadTeams.fulfilled, (state, action) => {
      state.teams = [...state.teams, ...action.payload];
    });
    builder.addCase(loadTeams.rejected, (state, action) => {
      state.teams = action.error;
    });

    builder.addCase(loadTeam.fulfilled, (state, action) => {
      state.teamByID = {
        ...state.teamByID,
        [action.meta.arg]: action.payload,
      };
    });
    builder.addCase(loadTeam.rejected, (state, action) => {
      state.teamByID = action.error;
    });
  },
});
