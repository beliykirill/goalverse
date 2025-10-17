import { AsyncThunkStatus } from '@shared/types/store';

export interface ITeam {}

export interface TeamsState {
  data: ITeam[];
  status: AsyncThunkStatus;
}
