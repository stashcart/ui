import type { NextPage } from 'next';
import React from 'react';
import { Header } from 'components/Header/Header';
import { MainPage } from 'components/MainPage/MainPage';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};

export default Home;
