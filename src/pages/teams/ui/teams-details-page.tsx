import { FC, useEffect } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { teamsAPI } from '@shared/lib/api';

export const TeamsDetailsPage: FC = () => {
  const { params } = useRoute();

  useEffect(() => {
    teamsAPI
      .getTeam(null, { id: params.id })
      .then(console.log)
      .catch(console.log);
  }, []);

  return <View />;
};
