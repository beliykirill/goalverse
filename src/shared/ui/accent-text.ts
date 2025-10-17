import { color } from '@shared/lib/themes';
import styled, { css } from 'styled-components/native';

export const accentTextStyle = css`
  font-family: SRubik-SemiBold;
  font-size: 18px;
  line-height: 22px;
  color: ${color('textBrand')};
`;

export const AccentText = styled.Text`
  ${accentTextStyle};
`;
