import { color } from '@shared/lib/themes';
import styled, { css } from 'styled-components/native';

export const smallTextStyle = css`
  font-family: Rubik-Bold;
  font-size: 12px;
  line-height: 16px;
  color: ${color('textMain')};
`;

export const SmallText = styled.Text`
  ${smallTextStyle};
`;
