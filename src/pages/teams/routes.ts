import { TeamsHomePage } from './ui/teams-home-page.tsx';
import { TeamsDetailsPage } from './ui/teams-details-page.tsx';

export const teamsRoutes = [
  {
    name: 'teams',
    component: TeamsHomePage,
  },
  {
    name: 'teams/details',
    component: TeamsDetailsPage,
  },
];
