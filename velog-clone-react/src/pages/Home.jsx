import React from 'react';
import Header from '../components/common/Header';
import Profile from '../components/home/Profile'
import HomeNav from '../components/home/HomeNav'
import ArticlesContainer from '../components/home/ArticlesContainer'
import styled from 'styled-components';
import { Route } from "react-router-dom";
import SeriesCategory from '../components/seriesCategory/SeriesCategory';

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Profile />
      <HomeNav />
      <Route path="/" exact component={() => <ArticlesContainer />} />
      <Route path="/series" exact component={() => <SeriesCategory />} />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;