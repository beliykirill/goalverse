import { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { AppDispatch, RootState } from '@shared/types/store';
import { color } from '@shared/lib/themes';
import { AppStack } from '@shared/types/global';
import { ITeamInformation } from '@shared/types/teams';
import { TeamCard } from '@widgets/teams/team-card';
import { loadTeams } from '@entities/teams';
import { HeadlineText } from '@shared/ui';

const OFFSET_INCREASE_AMOUNT = 10;

export const TeamsHomePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [t] = useTranslation();

  const { navigate } = useNavigation<AppStack>();

  const teams = useSelector<RootState, ITeamInformation[]>(
    state => state.teams.teams,
  );

  const [isLoading, setLoading] = useState(true);
  const [offset, setOffset] = useState(50);

  const renderItem: ListRenderItem<ITeamInformation> = useCallback(
    ({ item }) => (
      <TeamCard
        t={t}
        team={item}
        onPress={id => navigate('teams/details', { id })}
      />
    ),
    [],
  );

  const onLoadMore = async () => {
    const nextOffset = offset + OFFSET_INCREASE_AMOUNT;

    await dispatch(
      loadTeams({
        offset: nextOffset,
      }),
    );

    setOffset(prevState => prevState + nextOffset);
  };

  const onRefresh = async () => {
    try {
      setLoading(true);

      await dispatch(loadTeams());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(loadTeams()).then(() => setLoading(false));
  }, []);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <HeadlineText>{t('loading')}</HeadlineText>
      </LoaderWrapper>
    );
  }

  return (
    <Container>
      <StyledFlashList
        data={teams}
        renderItem={renderItem}
        refreshing={isLoading}
        onRefresh={onRefresh}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={200}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        maxToRenderPerBatch={10}
        windowSize={5}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
};

const Container = styled(SafeAreaView).attrs({
  edges: ['top', 'left', 'right', 'bottom'],
})`
  flex: 1;
  background: ${color('surfaceBackground')};
`;

const StyledFlashList = styled(FlashList)`
  flex: 1;
`;

const Separator = styled.View`
  width: 100%;
  flex: 1;
  height: 8px;
`;

const LoaderWrapper = styled(SafeAreaView).attrs({
  edges: ['top', 'left', 'right', 'bottom'],
})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color('surfaceBackground')};
`;
