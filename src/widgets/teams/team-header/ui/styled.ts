import styled from 'styled-components/native';
import { color } from '@shared/lib/themes';
import { MainText } from '@shared/ui';

export const Container = styled.View`
  gap: 16px;
  background-color: ${color('surfaceBackgroundSecondary')};
  margin-bottom: 12px;
  border-radius: 16px;
  padding: 8px 20px 16px 20px;
`;

export const BackText = styled(MainText)`
  color: ${color('textBrand')};
`;

export const LogoWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${color('surfaceBackground')};
  margin-right: 16px;
`;

export const TextContainer = styled.View`
  flex: 1;
  gap: 8px;
`;
