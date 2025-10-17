import { ITeam } from '@shared/types/teams';
import { createEndpoint } from './core/create-endpoint';

export const teamsAPI = {
  getTeams: createEndpoint<ITeam[]>('teams'),
};
