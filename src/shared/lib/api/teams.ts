import { ITeam, ITeamMatch, ITeamsWithMeta } from '@shared/types/teams';
import { createEndpoint } from './core/create-endpoint';

export const teamsAPI = {
  getTeams: createEndpoint<ITeamsWithMeta>('teams'),
  getTeam: createEndpoint<ITeam, null, { id: number }>('teams/{id}'),
  getTeamMatches: createEndpoint<
    { matches: ITeamMatch[] },
    null,
    { id: number }
  >('teams/{id}/matches'),
};
