import { FC } from 'react';
import { TFunction } from 'i18next';
import { ITeamSquad } from '@shared/types/teams';
import { MainText, SmallText } from '@shared/ui';
import {
  LeftWrapper,
  NumberCircle,
  PlayerContainer,
  RightWrapper,
  TextContainer,
  Container,
  ValueText,
  TitleText,
  PlayersWrapper,
} from './styled';

interface Props {
  t: TFunction;
  squad: ITeamSquad[];
}

export const TeamSquad: FC<Props> = ({ t, squad }) => {
  return (
    <Container>
      <TitleText>{t('squad_title')}</TitleText>

      <PlayersWrapper>
        {squad.map(player => (
          <PlayerContainer key={player.id}>
            <LeftWrapper>
              <NumberCircle>
                <MainText>
                  {t('shirt_number', { count: player.shirtNumber })}
                </MainText>
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
    </Container>
  );
};
