import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { User } from '../../types';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_ERROR = 'ADD_USER_ERROR';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';

export const getUsersAsync = createAsyncAction(
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
)<undefined, User[], AxiosError>();

export const addUserAsync = createAsyncAction(
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR
)<undefined, User, AxiosError>();

export const deleteUserAsync = createAsyncAction(
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR
)<undefined, string, AxiosError>();
