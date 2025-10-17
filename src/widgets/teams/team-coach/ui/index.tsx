import { FC } from 'react';
import { TFunction } from 'i18next';
import { ITeamCoach } from '@shared/types/teams';
import { MainText, SecondaryText } from '@shared/ui';
import { Section, InformationContainer, Container, TitleText } from './styled';

interface Props {
  t: TFunction;
  coach: ITeamCoach;
}

export const TeamCoach: FC<Props> = ({ t, coach }) => {
  const { name, nationality, dateOfBirth } = coach;

  return (
    <Container>
      <TitleText>{t('coach_title')}</TitleText>

      <Section>
        <InformationContainer>
          <SecondaryText>{t('name')}</SecondaryText>
          <MainText numberOfLines={1} ellipsizeMode="tail">
            {name}
          </MainText>
        </InformationContainer>
        <InformationContainer>
          <SecondaryText>{t('nationality')}</SecondaryText>
          <MainText>{nationality}</MainText>
        </InformationContainer>
        <InformationContainer>
          <SecondaryText>{t('date_of_birth')}</SecondaryText>
          <MainText>{dateOfBirth}</MainText>
        </InformationContainer>
      </Section>
    </Container>
  );
};
