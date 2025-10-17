import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppStack = NativeStackNavigationProp<{
  teams: {};
  'teams/details': { id: string };
}>;

export type Nullable<T> = T | null;
