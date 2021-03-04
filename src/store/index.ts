import { combineReducers, createStore } from 'redux';
import { AppThemeState } from './theme/types';
import { appThemeReducer } from './theme/reducer';

export type StoreState = {
  theme: AppThemeState;
};

export const store = createStore(
  combineReducers({
    theme: appThemeReducer,
  }),
);
