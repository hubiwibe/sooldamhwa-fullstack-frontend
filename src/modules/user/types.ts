import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { User } from '../../types';

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  users: {
    loading: boolean;
    error: Error | null;
    data: User[];
  };
};
