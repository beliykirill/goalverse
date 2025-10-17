import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam, ITeamsWithMeta } from '@shared/types/teams';
import { teamsAPI } from '@shared/lib/api';

export const loadTeams = createAsyncThunk<ITeamsWithMeta, { offset?: number }>(
  'teams',
  async (params = {}) => await teamsAPI.getTeams(params),
);

export const loadTeam = createAsyncThunk<ITeam, number>(
  'teams/details',
  async id => await teamsAPI.getTeam(null, { id }),
);
