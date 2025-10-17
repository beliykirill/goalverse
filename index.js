import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { App } from '@app/app';
import { store } from '@app/store';
import i18n from '@shared/lib/i18n';
import { defaultTheme } from '@shared/lib/themes';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </Provider>
));
