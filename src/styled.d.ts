import 'styled-components';
import { Theme } from './shared/types/Theme';

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}
