import { color } from '@shared/lib/themes';
import styled, { css } from 'styled-components/native';

export const headlineTextStyle = css`
  font-family: Rubik-Bold;
  font-size: 28px;
  line-height: 32px;
  color: ${color('textMain')};
`;

export const HeadlineText = styled.Text`
  ${headlineTextStyle};
`;
