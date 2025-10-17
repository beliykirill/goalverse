import { FC } from 'react';
import { TFunction } from 'i18next';
import { ITeam } from '@shared/types/teams';
import { MainText, SecondaryText } from '@shared/ui';
import { Linking } from 'react-native';
import { Container, LinkText, TextContainer } from './styled';

interface Props {
  t: TFunction;
  team: ITeam;
}

export const TeamDetails: FC<Props> = ({ t, team }) => {
  const { venue, address, clubColors, founded, website } = team;

  return (
    <Container>
      <TextContainer>
        <SecondaryText>{t('venue')}</SecondaryText>
        <MainText>{venue}</MainText>
      </TextContainer>
      <TextContainer>
        <SecondaryText>{t('address')}</SecondaryText>
        <MainText numberOfLines={1} ellipsizeMode="tail">
          {address}
        </MainText>
      </TextContainer>
      <TextContainer>
        <SecondaryText>{t('club_colors')}</SecondaryText>
        <MainText numberOfLines={1} ellipsizeMode="tail">
          {clubColors}
        </MainText>
      </TextContainer>
      <TextContainer>
        <SecondaryText>{t('founded')}</SecondaryText>
        <MainText numberOfLines={1} ellipsizeMode="tail">
          {founded}
        </MainText>
      </TextContainer>
      <TextContainer>
        <SecondaryText>{t('website')}</SecondaryText>
        <LinkText onPress={() => Linking.openURL(website)}>
          {website.replace(/^https?:\/\//, '')}
        </LinkText>
      </TextContainer>
    </Container>
  );
};
