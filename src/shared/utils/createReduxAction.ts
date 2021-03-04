import { ReduxAction } from '../types/ReduxAction';

type CreateReduxAction = <ActionType, ActionPayload>(
  type: ActionType,
) => (payload: ActionPayload) => ReduxAction<ActionType, ActionPayload>;
export const createReduxAction: CreateReduxAction = type => payload => ({ type, payload });
