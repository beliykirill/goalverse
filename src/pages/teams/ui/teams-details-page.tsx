import { ScrollView, Linking } from 'react-native';
import styled from 'styled-components/native';
import { HeadlineText, MainText, SecondaryText, SmallText } from '@shared/ui';
import { color } from '@shared/lib/themes';
import { ITeam } from '@shared/types/teams.ts';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@shared/types/store';
import { Nullable } from '@shared/types/global';
import { loadTeam } from '@entities/teams';

export const TeamsDetailsPage = () => {
  const dispatch = useDispatch();

  const { params } = useRoute();

  const team = useSelector<RootState, Nullable<ITeam>>(
    state => state.teams.teamByID[params.id],
  );

  useEffect(() => {
    if (team) return;

    const onLoadTeam = async () => {
      if (!team) {
        dispatch(loadTeam(params.id as number));

        return;
      }
    };

    onLoadTeam();
  }, [team]);

  if (!team) return null;

  return (
    <ScrollView>
      <Header>
        <Logo source={{ uri: team.crest }} resizeMode="contain" />
        <TitleBlock>
          <HeadlineText>{team.name}</HeadlineText>
          <SecondaryText>{team.shortName}</SecondaryText>
        </TitleBlock>
      </Header>

      <Container>
        {/* Team Info */}
        <Card>
          <InfoRow>
            <LabelText>🏟 Venue</LabelText>
            <SingleLineText>{team.venue}</SingleLineText>
          </InfoRow>
          <InfoRow>
            <LabelText>📍 Address</LabelText>
            <SingleLineText>{team.address}</SingleLineText>
          </InfoRow>
          <InfoRow>
            <LabelText>🎨 Club Colors</LabelText>
            <SingleLineText>{team.clubColors}</SingleLineText>
          </InfoRow>
          <InfoRow>
            <LabelText>🗓 Founded</LabelText>
            <SingleLineText>{team.founded}</SingleLineText>
          </InfoRow>
          <InfoRow>
            <LabelText>🌐 Website</LabelText>
            <LinkText onPress={() => Linking.openURL(team.website)}>
              {team.website.replace(/^https?:\/\//, '')}
            </LinkText>
          </InfoRow>
        </Card>

        {/* Coach Info */}
        <SectionTitle>Coach</SectionTitle>
        <Card>
          <InfoRow>
            <LabelText>👤 Name</LabelText>
            <SingleLineText>{team.coach.name}</SingleLineText>
          </InfoRow>
          <InfoRow>
            <LabelText>🇳🇿 Nationality</LabelText>
            <SingleLineText>{team.coach.nationality}</SingleLineText>
          </InfoRow>
          <InfoRow>
            <LabelText>📅 Date of Birth</LabelText>
            <SingleLineText>{team.coach.dateOfBirth}</SingleLineText>
          </InfoRow>
        </Card>

        {/* Running Competitions */}
        <SectionTitle>Competitions</SectionTitle>
        {team.runningCompetitions.map(c => (
          <Card key={c.id}>
            <InfoRow>
              <LabelText>🏆 {c.type}</LabelText>
              <SingleLineText>{c.name}</SingleLineText>
            </InfoRow>
          </Card>
        ))}

        {/* Squad */}
        <SectionTitle>Players</SectionTitle>
        {team.squad.map(player => (
          <PlayerRow key={player.id}>
            <Left>
              <NumberCircle>
                <NumberText>#{player.shirtNumber}</NumberText>
              </NumberCircle>
              <NameBlock>
                <MainText>{player.name}</MainText>
                <SmallText>{player.position}</SmallText>
              </NameBlock>
            </Left>
            <Right>
              <SmallText>{player.nationality}</SmallText>
              <ValueText>
                {player.marketValue ? `$${player.marketValue}` : '-'}
              </ValueText>
            </Right>
          </PlayerRow>
        ))}
      </Container>
      {/* Header */}
    </ScrollView>
  );
};

// ===== Styled Components =====

const Container = styled(SafeAreaView).attrs({
  edges: ['top', 'left', 'right', 'bottom'],
})`
  flex: 1;
  background: ${color('surfaceBackground')};
`;

const Header = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  padding: 8px 20px 16px 20px;
  background-color: ${color('surfaceBackgroundSecondary')};
  margin-bottom: 12px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Logo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${color('surfaceBackground')};
  margin-right: 16px;
`;

const TitleBlock = styled.View`
  flex: 1;
`;

const Card = styled.View`
  background-color: ${color('surfaceBackgroundSecondary')};
  border-radius: 16px;
  padding: 16px;
  margin: 8px 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 6px;
  elevation: 3;
`;

const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const LabelText = styled(SmallText)`
  color: ${color('textPrimary')};
`;

const SingleLineText = styled(MainText).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})``;

const LinkText = styled.Text`
  font-family: Rubik-Medium;
  font-size: 14px;
  color: ${color('textBrand')};
  text-decoration: underline;
`;

const SectionTitle = styled(HeadlineText)`
  margin: 16px 20px 8px 20px;
`;

const PlayerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${color('surfaceBackgroundSecondary')};
  padding: 12px 16px;
  border-radius: 16px;
  margin-vertical: 6px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 6px;
  elevation: 2;
`;

const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NumberCircle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${color('surfaceBrand')};
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

const NumberText = styled(MainText)`
  color: #fff;
  font-weight: 700;
`;

const NameBlock = styled.View``;

const Right = styled.View`
  align-items: flex-end;
`;

const ValueText = styled(MainText)`
  color: ${color('textBrand')};
  font-weight: 600;
`;
