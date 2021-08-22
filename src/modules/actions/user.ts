export const ADD_USER = 'user/ADD_USER' as const;
export const REMOVE_USER = 'user/REMOVE_USER' as const;

export const addUser = (name: string) => ({
  type: ADD_USER,
  name,
});

export const deleteUser = (name: string) => ({
  type: REMOVE_USER,
  name,
});
