import { createSimpleApi } from './create-simple-api';

export const createEndpoint = createSimpleApi(
  'https://api.football-data.org/v4',
);
