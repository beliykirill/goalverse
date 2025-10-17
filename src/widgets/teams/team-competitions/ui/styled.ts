import styled from 'styled-components/native';
import { HeadlineText } from '@shared/ui';
import { color } from '@shared/lib/themes';

export const Container = styled.View`
  gap: 8px;
  margin-top: 16px;
`;

export const TitleText = styled(HeadlineText)`
  margin-left: 16px;
`;

export const CompetitionsWrapper = styled.View`
  gap: 8px;
`;

export const CompetitionContainer = styled.View`
  background-color: ${color('surfaceBackgroundSecondary')};
  border-radius: 16px;
  padding: 16px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
