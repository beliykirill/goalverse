import { createAsyncThunk } from '@reduxjs/toolkit';
import { TeamsState } from '@shared/types/teams';

export const loadTeams = createAsyncThunk<TeamsState>('teams', async () => {});
