import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam, ITeamInformation } from '@shared/types/teams';
import { teamsAPI } from '@shared/lib/api';

export const loadTeams = createAsyncThunk<
  ITeamInformation[],
  { offset?: number },
  { rejectValue: string }
>('teams', async (params = {}, { rejectWithValue }) => {
  try {
    const teamsWithMeta = await teamsAPI.getTeams(params);

    return teamsWithMeta.teams;
  } catch (error) {
    return rejectWithValue('teams_load_failed');
  }
});

export const loadTeam = createAsyncThunk<
  ITeam,
  number,
  { rejectValue: string }
>('teams/details', async (id, { rejectWithValue }) => {
  try {
    return await teamsAPI.getTeam(null, { id });
  } catch (error) {
    return rejectWithValue('team_not_found');
  }
});
