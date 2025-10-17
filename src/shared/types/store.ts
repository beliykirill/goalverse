import { store } from '@app/store';
import { TeamsState } from '@shared/types/teams';

export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
export type AsyncThunkStatus = 'pending' | 'fulfilled' | 'rejected';

export interface RootState {
  teams: TeamsState;
}
