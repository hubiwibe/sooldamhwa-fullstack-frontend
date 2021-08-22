import React, { memo, useState, useCallback } from 'react';
import Header from '../components/Header';
import Divider from '../components/Divider';
import { Box, Container } from '@material-ui/core';
import MatchResult from '../components/MatchResult';
import AddedUsers from '../components/AddedUsers';
import GroupOptions from '../components/GroupOptions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { User } from '../types';
import { getUsersThunk } from '../modules/user';
import { useEffect } from 'react';

const boxMargin = 4;
const dividerHeight = '10px';

const Home: React.FC = memo(() => {
  const { data: users } = useSelector((state: RootState) => state.user.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  const [groups, setGroups] = useState<Array<User[]>>([]);

  const handleRandomMatch = useCallback(
    (groupCount: Number, groupUserMinCount: Number) => {
      const suffleUsers: User[] = [...(users as User[])];
      suffleUsers.sort(() => Math.random() - 0.5);
      console.log(suffleUsers);

      const suffleGroups: Array<User[]> = [];

      let remainUserCount: Number = (users as User[]).length;
      const maxGroupUserCount: Number = +remainUserCount / +groupCount;

      for (let i = 0; i < groupCount; i++) {
        const suffleGroup: User[] = [];
        const userCount: Number =
          i === +groupCount - 1
            ? remainUserCount
            : Math.floor(
                Math.random() * (+maxGroupUserCount - +groupUserMinCount + 1)
              ) + +groupUserMinCount;
        remainUserCount = +remainUserCount - +userCount;

        for (let j = 0; j < userCount; j++) {
          suffleGroup.push(suffleUsers.pop() as User);
        }

        suffleGroups.push(suffleGroup);
      }

      setGroups(() => [...suffleGroups]);
    },
    [users]
  );

  return (
    <>
      <Container maxWidth='md'>
        <Box m={boxMargin + 1} />
        <Header users={users} dispatch={dispatch} />
        <Box m={boxMargin} />
        <AddedUsers users={users} dispatch={dispatch} />
        <Box m={boxMargin} />
        <GroupOptions users={users} handleRandomMatch={handleRandomMatch} />
        <Box m={boxMargin} />
      </Container>
      <Divider height={dividerHeight} background={'#E0E0E0'} />
      <Divider height={dividerHeight} background={'#F4BB44'} />
      <Divider height={dividerHeight} background={'#5C96CA'} />
      <Box m={boxMargin} />
      <Container maxWidth='md'>
        <MatchResult groups={groups} />
      </Container>
    </>
  );
});

export default Home;
