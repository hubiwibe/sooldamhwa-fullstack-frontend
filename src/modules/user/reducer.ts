import { createReducer } from 'typesafe-actions';
import { UserState, UserAction } from './types';
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from './actions';

const initialState: UserState = {
  users: {
    loading: false,
    error: null,
    data: [],
  },
};

const user = createReducer<UserState, UserAction>(initialState, {
  [GET_USERS]: state => ({
    users: {
      loading: true,
      error: null,
      data: [],
    },
  }),
  [GET_USERS_SUCCESS]: (state, action) => ({
    users: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_USERS_ERROR]: (state, action) => ({
    users: {
      loading: false,
      error: action.payload,
      data: [],
    },
  }),

  [ADD_USER]: state => ({
    users: {
      ...state.users,
      loading: true,
      error: null,
    },
  }),
  [ADD_USER_SUCCESS]: (state, action) => ({
    users: {
      loading: false,
      error: null,
      data: state.users.data?.concat(action.payload),
    },
  }),
  [ADD_USER_ERROR]: (state, action) => ({
    users: {
      ...state.users,
      loading: false,
      error: action.payload,
    },
  }),
  [DELETE_USER]: state => ({
    users: {
      ...state.users,
      loading: true,
      error: null,
    },
  }),
  [DELETE_USER_SUCCESS]: (state, action) => ({
    users: {
      loading: false,
      error: null,
      data: state.users.data?.filter(user => user.name !== action.payload),
    },
  }),
  [DELETE_USER_ERROR]: (state, action) => ({
    users: {
      ...state.users,
      loading: false,
      error: action.payload,
    },
  }),
});

export default user;
