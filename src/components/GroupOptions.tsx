import { Box, Button, TextField } from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';
import React, { memo, useState } from 'react';
import { useCallback } from 'react';

const TextFieldStyle = { minWidth: '160px' };

const GroupOptions: React.FC = memo(() => {
  const [groupCount, setGroupCount] = useState<Number>(1);
  const [groupUserMinCount, setGroupUserMinCount] = useState<Number>(1);

  const handleGroupCountChange = useCallback(event => {
    const value = event.target.value;
    if (value > 0) {
      setGroupCount(() => value);
    }
  }, []);

  const handleGroupUserMinCountChange = useCallback(event => {
    const value = event.target.value;
    if (value > 0) {
      setGroupUserMinCount(() => value);
    }
  }, []);

  return (
    <Box display='flex' justifyContent='center'>
      <TextField
        style={TextFieldStyle}
        label='그룹 수'
        variant='outlined'
        type='number'
        value={groupCount}
        onChange={handleGroupCountChange}
      />
      <Box m={1} />
      <TextField
        style={TextFieldStyle}
        label='그룹별 최소 인원 수'
        variant='outlined'
        type='number'
        value={groupUserMinCount}
        onChange={handleGroupUserMinCountChange}
      />
      <Box m={1} />
      <Button variant='outlined' color='secondary' startIcon={<Autorenew />}>
        랜덤 매칭
      </Button>
    </Box>
  );
});

export default GroupOptions;
