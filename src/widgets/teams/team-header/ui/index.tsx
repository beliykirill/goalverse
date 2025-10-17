import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { TFunction } from 'i18next';
import { HeadlineText, SecondaryText } from '@shared/ui';
import {
  BackText,
  Container,
  TextContainer,
  LogoWrapper,
  Logo,
} from './styled';

interface Props {
  t: TFunction;
  crest: string;
  name: string;
  shortName: string;
  onBack(): void;
}

export const TeamHeader: FC<Props> = ({
  t,
  crest,
  name,
  shortName,
  onBack,
}) => {
  return (
    <Container>
      <TouchableOpacity onPress={onBack}>
        <BackText>{t('go_back')}</BackText>
      </TouchableOpacity>

      <LogoWrapper>
        <Logo source={{ uri: crest }} resizeMode="contain" />

        <TextContainer>
          <HeadlineText>{name}</HeadlineText>
          <SecondaryText>{shortName}</SecondaryText>
        </TextContainer>
      </LogoWrapper>
    </Container>
  );
};
