import { color } from '@shared/lib/themes';
import styled, { css } from 'styled-components/native';

export const mainTextStyle = css`
  font-family: Rubik-SemiBold;
  font-size: 16px;
  line-height: 20px;
  color: ${color('textMain')};
`;

export const MainText = styled.Text`
  ${mainTextStyle};
`;
