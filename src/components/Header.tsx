import { Box, Button, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { memo, useState } from 'react';
import { useCallback } from 'react';
import { UserAlertMessage } from '../messages';
import { addUserThunk } from '../modules/user';
import { UserDispatchProps } from '../types';
import swalFire from '../utils/swalFire';

const Header: React.FC<UserDispatchProps> = memo(({ users, dispatch }) => {
  const [name, setName] = useState('');

  const handleNameChange = useCallback(
    event => {
      const value = event.target.value;
      if (name !== value) {
        setName(() => value);
      }
    },
    [name],
  );

  const handleAddUser = useCallback(() => {
    if (name === '') {
      swalFire.error(UserAlertMessage.cannotEmptyName);
    } else {
      const user = users.find(user => user.name === name);
      if (user) {
        swalFire.error(UserAlertMessage.alreadyExistUser);
      } else {
        dispatch(addUserThunk(name));
        setName(() => '');
      }
    }
  }, [dispatch, name, users]);

  return (
    <Box display="flex" justifyContent="center" maxHeight="56px">
      <img src="/logo.png" alt="로고" width="170px" />
      <Box m={3} />
      <TextField
        style={{ minWidth: '320px' }}
        label="이름"
        value={name}
        variant="outlined"
        onChange={handleNameChange}
      />
      <Box m={1} />
      <Button
        variant="outlined"
        color="primary"
        startIcon={<Add />}
        onClick={handleAddUser}
      >
        사용자 추가
      </Button>
    </Box>
  );
});

export default Header;
