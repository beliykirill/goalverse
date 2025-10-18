import { FC, useState } from 'react';
import { TFunction } from 'i18next';
import { format, parseISO } from 'date-fns';
import { ITeamMatch } from '@shared/types/teams';
import {
  Container,
  TitleContainer,
  InformationContainer,
  CompetitionContainer,
  CompetitionName,
  CompetitionLogo,
  Section,
  TeamText,
  VSText,
  ScoreText,
  StatusText,
  TeamLogo,
  TeamWrapper,
  BadgeWrapper,
  AwayBadge,
  HomeBadge,
  VersusWrapper,
  MatchWrapper,
  MatchDate,
  StatusBadge,
  ToggleIcon,
} from './styled';
import { HeadlineText } from '@shared/ui';

interface Props {
  t: TFunction;
  matches: ITeamMatch[];
  teamId: number;
}

export const TeamMatches: FC<Props> = ({ t, matches, teamId }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <Container>
      <TitleContainer onPress={() => setExpanded(prevState => !prevState)}>
        <HeadlineText>{t('matches_title')}</HeadlineText>
        <ToggleIcon>{isExpanded ? '▲' : '▼'}</ToggleIcon>
      </TitleContainer>

      {isExpanded &&
        matches.map(match => {
          const {
            id,
            competition,
            homeTeam,
            awayTeam,
            utcDate,
            status,
            score,
          } = match;
          console.log(status);

          const isHome = homeTeam.id === teamId;
          const isFinished = status === 'FINISHED';
          const hasScore =
            score?.fullTime?.home != null && score?.fullTime?.away != null;

          const date = format(parseISO(utcDate), 'dd MMM, HH:mm');

          return (
            <MatchWrapper key={id}>
              <InformationContainer>
                <CompetitionContainer>
                  {competition.emblem && (
                    <CompetitionLogo source={{ uri: competition.emblem }} />
                  )}

                  <CompetitionName>{competition.name}</CompetitionName>
                </CompetitionContainer>

                <BadgeWrapper>
                  <StatusBadge $status={status}>
                    <StatusText>{t('status', { context: status })}</StatusText>
                  </StatusBadge>

                  <MatchDate>{date}</MatchDate>
                </BadgeWrapper>
              </InformationContainer>

              <Section>
                <TeamWrapper>
                  {homeTeam.crest && (
                    <TeamLogo source={{ uri: homeTeam.crest }} />
                  )}
                  <TeamText>{homeTeam.shortName}</TeamText>

                  {isHome && <HomeBadge>{t('home')}</HomeBadge>}
                </TeamWrapper>

                <VersusWrapper>
                  {hasScore && isFinished ? (
                    <ScoreText>
                      {score.fullTime.home} : {score.fullTime.away}
                    </ScoreText>
                  ) : (
                    <VSText>{t('versus')}</VSText>
                  )}
                </VersusWrapper>

                <TeamWrapper>
                  {awayTeam.crest && (
                    <TeamLogo source={{ uri: awayTeam.crest }} />
                  )}

                  <TeamText>{awayTeam.shortName}</TeamText>
                  {!isHome && <AwayBadge>{t('away')}</AwayBadge>}
                </TeamWrapper>
              </Section>
            </MatchWrapper>
          );
        })}
    </Container>
  );
};
