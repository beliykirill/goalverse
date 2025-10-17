import styled from 'styled-components/native';
import { color } from '@shared/lib/themes';
import { HeadlineText, MainText } from '@shared/ui';

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
  margin: 8px 16px;
`;

export const PlayersWrapper = styled.View`
  gap: 8px;
`;

export const PlayerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${color('surfaceBackgroundSecondary')};
  padding: 12px 16px;
  border-radius: 16px;
  gap: 12px;
`;

export const NumberCircle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${color('surfaceBrand')};
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  gap: 8px;
`;

export const ValueText = styled(MainText)`
  color: ${color('textBrand')};
`;

export const LeftWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const RightWrapper = styled.View`
  align-items: flex-end;
`;
