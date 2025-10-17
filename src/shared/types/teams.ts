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

export interface ITeamContract {
  start: string;
  until: string;
}

export interface ITeamSquad {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
  shirtNumber: number;
  marketValue: number;
  contract: ITeamContract;
  lastUpdated: string;
}

export interface ITeamCoach {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  contract: ITeamContract;
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

export interface ITeamMatchArea {
  code: string;
  flag: string;
  id: number;
  name: string;
}

export interface IMatchTeam {
  crest: string;
  id: number;
  name: string;
  shortName: string;
  tla: string;
}

export interface ITeamMatchCompetition {
  code: string;
  emblem: string;
  id: number;
  name: string;
  type: string;
}

export interface ITeamMatchScore {
  duration: string;
  fullTime: { home: 0; away: 1 };
  halfTime: { home: 0; away: 1 };
  winner: string;
}

export interface ITeamMatchSeason {
  currentMatchday: number;
  endDate: string;
  id: number;
  startDate: string;
  winner: null;
}

export interface ITeamMatch {
  id: number;
  matchday: number;
  stage: string;
  venue?: string;
  status: string;
  utcDate: string;
  season: ITeamMatchSeason;
  area: ITeamMatchArea;
  awayTeam: IMatchTeam;
  score: ITeamMatchScore;
  homeTeam: IMatchTeam;
  competition: ITeamMatchCompetition;
}

export interface ITeam extends ITeamInformation {
  area: ITeamArea;
  runningCompetitions: ITeamRunningCompetition[];
  coach: ITeamCoach;
  marketValue: number;
  squad: ITeamSquad[];
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
  teamByID: {
    [teamId: string]: ITeam;
  };
  teams: ITeamInformation[];
  matches: ITeamMatch[];
}
