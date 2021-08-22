import { Box, Chip, Paper } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import React, { memo } from 'react';
import { User } from '../types';

type MatchResultProps = {
  groups: Array<User[]>;
};

const MatchResult: React.FC<MatchResultProps> = memo(({ groups }) => {
  return (
    <Box
      display='flex'
      flexWrap='wrap'
      justifyContent='center'
      alignContent='center'
    >
      {groups.map((group, index) => (
        <Box m={1} key={`suffled-group-${index}`}>
          <Paper elevation={5}>
            <Box
              display='flex'
              flexWrap='wrap'
              maxWidth='160px'
              maxHeight='200px'
              overflow='auto'
              justifyContent='center'
            >
              {group.map(user => (
                <Box m={1} key={user.name}>
                  <Chip icon={<Face />} label={user.name} variant='outlined' />
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
});

export default MatchResult;
