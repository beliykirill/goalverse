import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { appRoutes } from '@app/routes';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="teams"
        screenOptions={{ headerShown: false }}>
        {Object.entries(appRoutes).map(([group, routes]) => (
          <Stack.Group key={group} navigationKey={group}>
            {routes.map(route => (
              <Stack.Screen key={route.name} {...route} />
            ))}
          </Stack.Group>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
