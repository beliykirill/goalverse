import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { color } from '@shared/lib/themes';
import { ITeam } from '@shared/types/teams';
import { AppDispatch, RootState } from '@shared/types/store';
import { Nullable } from '@shared/types/global';
import { HeadlineText } from '@shared/ui';
import { loadTeam } from '@entities/teams';
import { TeamCoach } from '@widgets/teams/team-coach';
import { TeamSquad } from '@widgets/teams/team-squad';
import { TeamCompetitions } from '@widgets/teams/team-competitions';
import { TeamDetails } from '@widgets/teams/team-details';
import { TeamHeader } from '@widgets/teams/team-header';

export const TeamsDetailsPage = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { goBack } = useNavigation();
  const { params } = useRoute();

  const team = useSelector<RootState, Nullable<ITeam>>(
    state => state.teams.teamByID[params.id],
  );

  useEffect(() => {
    if (team) return;

    dispatch(loadTeam(params.id));
  }, [team]);

  console.log(params.id);

  if (!team)
    return (
      <LoaderWrapper>
        <HeadlineText>{t('loading')}</HeadlineText>
      </LoaderWrapper>
    );

  const { name, shortName, crest, coach, squad, runningCompetitions } = team;

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TeamHeader
          t={t}
          name={name}
          shortName={shortName}
          crest={crest}
          onBack={goBack}
        />

        <TeamDetails t={t} team={team} />

        <TeamCompetitions t={t} runningCompetitions={runningCompetitions} />

        <TeamCoach t={t} coach={coach} />

        <TeamSquad t={t} squad={squad} />
      </ScrollView>
    </Container>
  );
};

const Container = styled(SafeAreaView).attrs({
  edges: ['top', 'left', 'right', 'bottom'],
})`
  flex: 1;
  background: ${color('surfaceBackground')};
  padding: 0 20px;
`;

const LoaderWrapper = styled(SafeAreaView).attrs({
  edges: ['top', 'left', 'right', 'bottom'],
})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color('surfaceBackground')};
`;
