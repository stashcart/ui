import type { NextPage } from 'next';
import React from 'react';
import { Header } from 'containers/Header/Header';
import { MainPage } from 'containers/MainPage/MainPage';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};

export default Home;
