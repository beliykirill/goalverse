import styled from 'styled-components/native';
import { color } from '@shared/lib/themes';
import { MainText } from '@shared/ui';

export const Container = styled.View`
  background-color: ${color('surfaceBackgroundSecondary')};
  border-radius: 16px;
  padding: 16px;
  gap: 8px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LinkText = styled(MainText)`
  color: ${color('textBrand')};
  text-decoration: underline;
`;
