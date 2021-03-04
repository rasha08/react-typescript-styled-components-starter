import React, { FC } from 'react';
import { HomeWrapperStyled } from './styled';
import { AppHeadlineStyled } from '../../shared/styles/AppHeadlineStyled';

const Home: FC = () => {
  return (
    <HomeWrapperStyled>
      <AppHeadlineStyled>Home</AppHeadlineStyled>
    </HomeWrapperStyled>
  );
};

export default Home;
