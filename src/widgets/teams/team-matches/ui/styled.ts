import styled from 'styled-components/native';
import { MainText, SecondaryText, SmallText } from '@shared/ui';
import { color } from '@shared/lib/themes';
import { switchProp } from 'styled-tools';

export const Container = styled.View`
  gap: 8px;
  margin-top: 16px;
`;

export const TitleContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
`;

export const ToggleIcon = styled.Text`
  font-size: 14px;
  color: ${color('textMain')};
`;

export const MatchWrapper = styled.View`
  background-color: ${color('surfaceBackgroundSecondary')};
  border-radius: 20px;
  padding: 8px 20px;
  gap: 16px;
`;

export const InformationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BadgeWrapper = styled.View`
  align-items: flex-end;
  gap: 4px;
`;

export const CompetitionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const CompetitionLogo = styled.Image`
  width: 20px;
  height: 20px;
`;

export const CompetitionName = styled(SecondaryText)`
  color: ${color('textBrand')};
`;

export const StatusBadge = styled.View<{ $status: string }>`
  padding: 2px 8px;
  border-radius: 8px;
  background-color: ${switchProp(
    '$status',
    {
      LIVE: '#e74c3c',
      FINISHED: '#27ae60',
      POSTPONED: '#f1c40f',
    },
    '#95a5a6',
  )};
`;

export const StatusText = styled(SmallText)`
  font-family: Rubik-Bold;
  color: white;
`;

export const MatchDate = styled(SmallText)`
  opacity: 0.8;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TeamWrapper = styled.View`
  flex: 1;
  align-items: center;
  gap: 6px;
`;

export const TeamLogo = styled.Image`
  width: 48px;
  height: 48px;
  resize-mode: contain;
`;

export const TeamText = styled(MainText)`
  text-align: center;
`;

export const VersusWrapper = styled.View`
  background-color: ${color('surfaceBrand')};
  padding: 4px 12px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const VSText = styled(SmallText)`
  color: white;
`;

export const ScoreText = styled(VSText)`
  color: white;
`;

export const HomeBadge = styled(SmallText)`
  color: ${color('textBrand')};
  font-weight: 600;
  font-size: 12px;
`;

export const AwayBadge = styled(HomeBadge)`
  color: ${color('textPrimary')};
`;
