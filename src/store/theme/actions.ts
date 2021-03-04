import { createReduxAction } from '../../shared/utils/createReduxAction';
import { SET_THEME } from './types';
import { ThemeType } from '../../shared/enums/ThemeType';

export const setAppTheme = createReduxAction<typeof SET_THEME, { type: ThemeType }>(SET_THEME);
