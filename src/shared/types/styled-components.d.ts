import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    surfaceBackground: string;
    surfaceBackgroundSecondary: string;
    surfaceBrand: string;

    textMain: string;
    textPrimary: string;
    textBrand: string;
  }
}
