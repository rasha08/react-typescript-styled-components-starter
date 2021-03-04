import { ThemeType } from '../../shared/enums/ThemeType';
import { AppThemeState, SET_THEME, ThemeReducer } from './types';
import { defaultTheme } from '../../shared/consts/default';
import { lightThemeColors } from '../../shared/consts/themes/light';
import { darkThemeColors } from '../../shared/consts/themes/dark';

const initialThemeState: AppThemeState = {
  type: ThemeType.Light,
  theme: {
    ...defaultTheme,
    ...lightThemeColors,
  },
};

export const appThemeReducer: ThemeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        type: action.payload.type,
        theme: {
          ...defaultTheme,
          ...(action.payload.type === ThemeType.Light ? lightThemeColors : darkThemeColors),
        },
      };
    default:
      return state;
  }
};
