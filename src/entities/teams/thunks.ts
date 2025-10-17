import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeamsWithMeta } from '@shared/types/teams';
import { teamsAPI } from '@shared/lib/api';

export const loadTeams = createAsyncThunk<ITeamsWithMeta, { offset?: number }>(
  'teams',
  async (params = {}) => await teamsAPI.getTeams(params),
);
