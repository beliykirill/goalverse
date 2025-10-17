import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam, ITeamInformation } from '@shared/types/teams';
import { teamsAPI } from '@shared/lib/api';

export const loadTeams = createAsyncThunk<
  ITeamInformation[],
  { offset?: number }
>(
  'teams',
  async (params = {}) =>
    await teamsAPI.getTeams(params).then(data => data.teams),
);

export const loadTeam = createAsyncThunk<ITeam, number>(
  'teams/details',
  async id => await teamsAPI.getTeam(null, { id }),
);
