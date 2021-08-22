import { Box, Chip, Paper } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import React, { memo } from 'react';

const MatchResult: React.FC = memo(() => {
  return (
    <Box
      display='flex'
      flexWrap='wrap'
      justifyContent='center'
      alignContent='center'
    >
      <Box m={1}>
        <Paper elevation={5}>
          <Box
            display='flex'
            flexWrap='wrap'
            maxWidth='160px'
            maxHeight='200px'
            overflow='auto'
            justifyContent='center'
          >
            <Box m={1}>
              <Chip icon={<Face />} label='chip' variant='outlined' />
            </Box>
            <Box m={1}>
              <Chip icon={<Face />} label='chip' variant='outlined' />
            </Box>
            <Box m={1}>
              <Chip icon={<Face />} label='chip' variant='outlined' />
            </Box>
            <Box m={1}>
              <Chip icon={<Face />} label='chip' variant='outlined' />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
});

export default MatchResult;
