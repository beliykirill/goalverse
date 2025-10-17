import styled from 'styled-components/native';
import { color } from '@shared/lib/themes';
import { HeadlineText } from '@shared/ui';

export const Container = styled.View`
  gap: 8px;
  margin-top: 16px;
`;

export const TitleText = styled(HeadlineText)`
  margin-left: 16px;
`;

export const Section = styled.View`
  background-color: ${color('surfaceBackgroundSecondary')};
  border-radius: 16px;
  padding: 16px;
  margin: 8px 0;
`;

export const InformationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
