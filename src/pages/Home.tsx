import React, { memo } from 'react';
import Header from '../components/Header';
import Divider from '../components/Divider';
import { Box, Container } from '@material-ui/core';
import MatchResult from '../components/MatchResult';
import AddedUsers from '../components/AddedUsers';
import GroupOptions from '../components/GroupOptions';

const Home: React.FC = memo(() => {
  const boxMargin = 4;
  const dividerHeight = '10px';

  return (
    <div>
      <Container maxWidth='md'>
        <Box m={boxMargin + 1} />
        <Header />
        <Box m={boxMargin} />
        <AddedUsers />
        <Box m={boxMargin} />
        <GroupOptions />
        <Box m={boxMargin} />
      </Container>
      <Divider height={dividerHeight} background={'#E0E0E0'} />
      <Divider height={dividerHeight} background={'#F4BB44'} />
      <Divider height={dividerHeight} background={'#5C96CA'} />
      <Box m={boxMargin} />
      <Container maxWidth='md'>
        <MatchResult />
      </Container>
    </div>
  );
});

export default Home;
