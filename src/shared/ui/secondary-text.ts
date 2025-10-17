import { color } from '@shared/lib/themes';
import styled, { css } from 'styled-components/native';

export const secondaryTextStyle = css`
  font-family: Rubik-Regular;
  font-size: 14px;
  line-height: 18px;
  color: ${color('textMain')};
`;

export const SecondaryText = styled.Text`
  ${secondaryTextStyle};
`;
