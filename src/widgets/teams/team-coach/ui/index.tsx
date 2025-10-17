import { FC } from 'react';
import { TFunction } from 'i18next';
import { ITeamCoach } from '@shared/types/teams';
import { MainText } from '@shared/ui';
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
          <MainText>{t('name')}</MainText>
          <MainText numberOfLines={1} ellipsizeMode="tail">
            {name}
          </MainText>
        </InformationContainer>
        <InformationContainer>
          <MainText>{t('nationality')}</MainText>
          <MainText numberOfLines={1} ellipsizeMode="tail">
            {nationality}
          </MainText>
        </InformationContainer>
        <InformationContainer>
          <MainText>{t('date_of_birth')}</MainText>
          <MainText numberOfLines={1} ellipsizeMode="tail">
            {dateOfBirth}
          </MainText>
        </InformationContainer>
      </Section>
    </Container>
  );
};
