import { ITeamsWithMeta } from '@shared/types/teams';
import { createEndpoint } from './core/create-endpoint';

export const teamsAPI = {
  getTeams: createEndpoint<ITeamsWithMeta>('teams'),
  getTeam: createEndpoint<{}, null, { id: number }>('teams/{id}'),
};
