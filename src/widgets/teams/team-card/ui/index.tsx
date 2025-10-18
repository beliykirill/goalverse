import { Linking } from 'react-native';
import { TFunction } from 'i18next';
import styled from 'styled-components/native';
import { color } from '@shared/lib/themes';
import { ITeamInformation } from '@shared/types/teams';
import { HeadlineText, SecondaryText, SmallText } from '@shared/ui';
import { parseStringToEmoji } from '@shared/lib/helpers';

interface TeamCardProps {
  t: TFunction;
  team: ITeamInformation;
  onPress(id: number): void;
}

export const TeamCard = ({ t, team, onPress }: TeamCardProps) => {
  const {
    id,
    name,
    shortName,
    address,
    crest,
    founded,
    clubColors,
    venue,
    website,
  } = team;

  return (
    <Container onPress={() => onPress(id)}>
      <Section>
        <Logo source={{ uri: crest }} resizeMode="contain" />

        <TextContainer>
          <HeadlineText>{name}</HeadlineText>
          <SecondaryText>{shortName}</SecondaryText>
        </TextContainer>
      </Section>

      <InformationContainer>
        <InformationBlock>
          <SecondaryText>{t('venue')}</SecondaryText>
          <ValueText>{venue}</ValueText>
        </InformationBlock>
        <InformationBlock>
          <SecondaryText>{t('address')}</SecondaryText>
          <ValueText numberOfLines={1} ellipsizeMode="tail">
            {address}
          </ValueText>
        </InformationBlock>
        <InformationBlock>
          <SecondaryText>{t('club_colors')}</SecondaryText>
          <ValueText>{parseStringToEmoji(clubColors)}</ValueText>
        </InformationBlock>
        <InformationBlock>
          <SecondaryText>{t('founded')}</SecondaryText>
          <ValueText>{founded}</ValueText>
        </InformationBlock>
        <InformationBlock>
          <SecondaryText>{t('website')}</SecondaryText>
          <LinkText onPress={() => Linking.openURL(team.website)}>
            {website.replace(/^https?:\/\//, '')}
          </LinkText>
        </InformationBlock>
      </InformationContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: ${color('surfaceBackgroundSecondary')};
  border-radius: 20px;
  padding: 16px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 6;
  gap: 20px;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.Image`
  width: 60px;
  height: 60px;
  gap: 16px;
`;

const TextContainer = styled.View`
  flex: 1;
  gap: 4px;
`;

const InformationContainer = styled.View`
  background-color: ${color('surfaceBackground')};
  border-radius: 16px;
  padding: 16px;
  gap: 12px;
`;

const InformationBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const ValueText = styled(SmallText)`
  text-align: right;
  flex: 1;
`;

const LinkText = styled.Text`
  font-family: Rubik-Medium;
  font-size: 14px;
  color: ${color('textBrand')};
`;
