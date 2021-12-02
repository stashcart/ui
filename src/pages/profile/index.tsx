import type { NextPage } from 'next';
import React from 'react';
import { Header } from 'components/Header/Header';
import { ProfilePage } from 'components/ProfilePage/ProfilePage';

const Profile: NextPage = () => {
  return (
    <>
      <Header />
      <ProfilePage />
    </>
  );
};

export default Profile;
