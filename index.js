import { AppRegistry } from 'react-native';
import { App } from '@app/app';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <App />
  </Provider>
));
