import { ThemeType } from '../../shared/enums/ThemeType';
import { Theme } from '../../shared/types/Theme';
import { ReduxAction } from '../../shared/types/ReduxAction';
import { ReduxReducer } from '../../shared/types/ReduxReducer';

export const SET_THEME = 'SET_THEME';

export type AppThemeState = {
  type: ThemeType;
  theme: Theme;
};

export type SetThemeAction = ReduxAction<typeof SET_THEME, { type: ThemeType }>;

export type ThemeReducer = ReduxReducer<AppThemeState, SetThemeAction>;
