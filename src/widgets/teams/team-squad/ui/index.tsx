import { FC, useState } from 'react';
import { TFunction } from 'i18next';
import { ITeamSquad } from '@shared/types/teams';
import { HeadlineText, MainText, SmallText } from '@shared/ui';
import {
  LeftWrapper,
  NumberCircle,
  PlayerContainer,
  RightWrapper,
  TextContainer,
  Container,
  ValueText,
  TitleContainer,
  ToggleIcon,
  PlayersWrapper,
} from './styled';

interface Props {
  t: TFunction;
  squad: ITeamSquad[];
}

export const TeamSquad: FC<Props> = ({ t, squad }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <Container>
      <TitleContainer onPress={() => setExpanded(prevState => !prevState)}>
        <HeadlineText>{t('squad_title')}</HeadlineText>
        <ToggleIcon>{isExpanded ? '▲' : '▼'}</ToggleIcon>
      </TitleContainer>

      {isExpanded && (
        <PlayersWrapper>
          {squad.map((player, index) => (
            <PlayerContainer key={player.id}>
              <LeftWrapper>
                <NumberCircle>
                  <MainText>{t('shirt_number', { count: ++index })}</MainText>
                </NumberCircle>
                <TextContainer>
                  <MainText>{player.name}</MainText>
                  <SmallText>{player.position}</SmallText>
                </TextContainer>
              </LeftWrapper>

              <RightWrapper>
                <SmallText>{player.nationality}</SmallText>
                <ValueText>
                  {t('market_value', {
                    context: player.marketValue > 0 ? null : 'none',
                    count: player.marketValue,
                  })}
                </ValueText>
              </RightWrapper>
            </PlayerContainer>
          ))}
        </PlayersWrapper>
      )}
    </Container>
  );
};
