import { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { AppDispatch, RootState } from '@shared/types/store';
import { ITeamFilters, TeamsState } from '@shared/types/teams';
import { TeamCard } from '@widgets/teams/team-card';
import { color } from '@shared/lib/themes';
import { AppStack } from '@shared/types/global';
import { loadTeams } from '@entities/teams';

const OFFSET_INCREASE_AMOUNT = 10;

export const TeamsHomePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [t] = useTranslation();

  const { navigate } = useNavigation<AppStack>();

  const { data, status } = useSelector<RootState, TeamsState>(
    state => state.teams,
  );

  const [offset, setOffset] = useState(data.count);

  const isLoading = status === 'pending';

  const renderItem: ListRenderItem<ITeam> = useCallback(
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

    setOffset(prevState =>
      Math.min(prevState + OFFSET_INCREASE_AMOUNT, data.count),
    );
  };

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  return (
    <Container>
      <StyledFlashList
        data={data.teams}
        renderItem={renderItem}
        refreshing={isLoading}
        onRefresh={() => dispatch(loadTeams())}
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
