import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { UserAction } from './types';
import { addUser, deleteUser, getUsers } from '../../api/user';
import { addUserAsync, deleteUserAsync, getUsersAsync } from './actions';

type UserActionType = ThunkAction<void, RootState, null, UserAction>;

export function getUsersThunk(): UserActionType {
  return async dispatch => {
    const { request, success, failure } = getUsersAsync;
    dispatch(request());
    try {
      const users = await getUsers();
      dispatch(success(users));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export function addUserThunk(name: string): UserActionType {
  return async dispatch => {
    const { request, success, failure } = addUserAsync;
    dispatch(request());
    try {
      const user = await addUser(name);
      dispatch(success(user));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export function deleteUserThunk(name: string): UserActionType {
  return async dispatch => {
    const { request, success, failure } = deleteUserAsync;
    dispatch(request());
    try {
      const statusCode = await deleteUser(name);
      dispatch(success(statusCode));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}
