import { Box, Button, TextField } from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';
import React, { memo, useState } from 'react';
import { useCallback } from 'react';
import { User } from '../types';

type GroupOptionsProps = {
  users: User[];
  handleRandomMatch: Function;
};

const TextFieldStyle = { minWidth: '160px' };

const GroupOptions: React.FC<GroupOptionsProps> = memo(
  ({ users, handleRandomMatch }) => {
    const [groupCount, setGroupCount] = useState<Number>(1);
    const [groupUserMinCount, setGroupUserMinCount] = useState<Number>(1);

    const handleGroupCountChange = useCallback(
      event => {
        const value = event.target.value;
        if (+groupUserMinCount * value <= users.length) {
          value > 0
            ? setGroupCount(() => value)
            : alert('그룹 수는 1개 이상이어야 합니다.');
        } else {
          alert('그룹 수는 사용자 인원수 보다 작아야 합니다.');
        }
      },
      [groupUserMinCount, users]
    );

    const handleGroupUserMinCountChange = useCallback(
      event => {
        const value = event.target.value;
        if (+groupCount * value <= users.length) {
          value > 0
            ? setGroupUserMinCount(() => value)
            : alert('그룹별 최소 인원 수는 1명 이상이어야 합니다.');
        } else {
          alert('그룹별 최소 인원 수가 구성할 수 있는 그룹 수를 초과합니다.');
        }
      },
      [groupCount, users]
    );

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
        <Button
          disabled={users?.length === 0}
          variant='outlined'
          color='secondary'
          startIcon={<Autorenew />}
          onClick={() => handleRandomMatch(groupCount, groupUserMinCount)}
        >
          랜덤 매칭
        </Button>
      </Box>
    );
  }
);

export default GroupOptions;
