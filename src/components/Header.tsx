import { Box, Button, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { memo } from 'react';

const Header: React.FC = memo(() => {
  return (
    <Box display='flex' justifyContent='center' maxHeight='56px'>
      <img src='/logo.png' alt='로고' width='170px' />
      <Box m={3} />
      <TextField
        style={{ minWidth: '320px' }}
        label='이름'
        variant='outlined'
      />
      <Box m={1} />
      <Button variant='outlined' color='primary' startIcon={<Add />}>
        사용자 추가
      </Button>
    </Box>
  );
});

export default Header;
