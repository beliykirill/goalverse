import { FC } from 'react';
import { TFunction } from 'i18next';
import { ITeamRunningCompetition } from '@shared/types/teams';
import { MainText, SecondaryText } from '@shared/ui';
import {
  CompetitionContainer,
  CompetitionsWrapper,
  Container,
  TextContainer,
  TitleText,
} from './styled';

interface Props {
  t: TFunction;
  runningCompetitions: ITeamRunningCompetition[];
}

export const TeamCompetitions: FC<Props> = ({ t, runningCompetitions }) => {
  return (
    <Container>
      <TitleText>{t('competitions_title')}</TitleText>

      <CompetitionsWrapper>
        {runningCompetitions.map(competition => (
          <CompetitionContainer key={competition.id}>
            <TextContainer>
              <SecondaryText>🏆 {competition.type}</SecondaryText>
              <MainText numberOfLines={1} ellipsizeMode="tail">
                {competition.name}
              </MainText>
            </TextContainer>
          </CompetitionContainer>
        ))}
      </CompetitionsWrapper>
    </Container>
  );
};
