import { Box, Chip, Typography } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import { memo } from 'react';
import { deleteUserThunk } from '../modules/user';
import { UserDispatchProps } from '../types';

const AddedUsers: React.FC<UserDispatchProps> = memo(({ users, dispatch }) => {
  const handleDelete = (name: string) => dispatch(deleteUserThunk(name));

  return (
    <Box
      display='flex'
      flexWrap='wrap'
      minHeight='10vh'
      maxHeight='15vh'
      overflow='auto'
      ml={4}
      mr={4}
      border='1px solid rgba(0,0,0,0.25)'
      borderRadius={5}
      justifyContent='center'
      alignContent='center'
    >
      {users?.length > 0 ? (
        users.map(user => (
          <Box key={user.name} m={1}>
            <Chip
              icon={<Face />}
              label={user.name}
              variant='outlined'
              onDelete={() => handleDelete(user.name)}
            />
          </Box>
        ))
      ) : (
        <Typography>사용자를 추가해 주세요</Typography>
      )}
    </Box>
  );
});

export default AddedUsers;
