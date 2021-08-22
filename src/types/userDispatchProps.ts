import { Dispatch } from 'react';
import { User } from '.';

export type UserDispatchProps = {
  users: User[];
  dispatch: Dispatch<any>;
};
