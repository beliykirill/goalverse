import { AsyncThunkStatus } from '@shared/types/store';

export interface ITeamArea {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface ITeamRunningCompetition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface ITeamCoachContract {
  start: string;
  until: string;
}

export interface ITeamCoach {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  contract: ITeamCoachContract;
}

export interface ITeamInformation {
  address: string;
  clubColors: string;
  crest: string;
  founded: number;
  id: number;
  lastUpdated: string;
  name: string;
  shortName: string;
  tla: string;
  venue: string;
  website: string;
}

export interface ITeam extends ITeamInformation {
  area: ITeamArea;
  runningCompetitions: ITeamRunningCompetition[];
  coach: ITeamCoach;
}

export interface ITeamFilters {
  limit: number;
  offset: number;
}

export interface ITeamsWithMeta {
  count: number;
  filters: ITeamFilters;
  teams: ITeamInformation[];
}

export interface TeamsState {
  data: ITeamsWithMeta;
  status: AsyncThunkStatus;
}
