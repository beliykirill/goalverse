import { color } from '@shared/lib/themes';
import styled, { css } from 'styled-components/native';

export const tinyTextStyle = css`
  font-family: Rubik-Medium;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.2px;
  color: ${color('textPrimary')};
`;

export const TinyText = styled.Text`
  ${tinyTextStyle};
`;
