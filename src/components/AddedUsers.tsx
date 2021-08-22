import { Box, Chip } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import { useCallback } from 'react';
import { memo, useState } from 'react';

type User = {
  name: string;
};

const initialUsers = [
  { name: '술담화' },
  { name: '구독서비스' },
  { name: '담화마켓' },
];

for (let i = 0; i < 30; i++) {
  initialUsers.push({ name: `전통주${i}` });
}

const AddedUsers: React.FC = memo(() => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const randomColor = useCallback(() => {
    const random = Math.floor(Math.random() * 3);
    return random > 0 ? (random === 1 ? 'primary' : 'secondary') : 'default';
  }, []);

  const handleDelete = useCallback(
    (name: string) => {
      setUsers(users.filter(user => user.name !== name));
    },
    [users]
  );

  return (
    <Box
      display='flex'
      flexWrap='wrap'
      maxHeight='15vh'
      overflow='auto'
      ml={4}
      mr={4}
      p={1}
      border='1px solid rgba(0,0,0,0.25)'
      borderRadius={5}
      justifyContent='center'
    >
      {users.map(user => (
        <Box key={user.name} m={1}>
          <Chip
            icon={<Face />}
            label={user.name}
            variant='outlined'
            color={randomColor()}
            onDelete={() => handleDelete(user.name)}
          />
        </Box>
      ))}
    </Box>
  );
});

export default AddedUsers;
