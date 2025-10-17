import { createSlice } from '@reduxjs/toolkit';
import { TeamsState } from '@shared/types/teams';
import { loadTeam, loadTeams } from './thunks';

const initialState: TeamsState = {
  teamByID: {},
  teamsWithMeta: {
    count: 0,
    filters: {
      offset: 0,
      limit: 0,
    },
    teams: [],
  },
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadTeams.fulfilled, (state, action) => {
      state.teamsWithMeta = {
        ...action.payload,
        teams: [...state.teamsWithMeta.teams, ...action.payload.teams],
      };
    });
    builder.addCase(loadTeam.fulfilled, (state, action) => {
      state.teamByID = {
        ...state.teamByID,
        [action.meta.arg]: action.payload,
      };
    });
  },
});
