import { combineReducers, configureStore } from '@reduxjs/toolkit';
import teamsReducer from '@entities/teams';

export const rootReducer = combineReducers({
  teams: teamsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
