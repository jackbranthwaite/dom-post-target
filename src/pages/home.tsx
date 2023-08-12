import React, { useContext, useEffect } from 'react';
import { HomeSection } from '../components/home-section/HomeSection';
import { useRequireAuth } from '../contexts/auth/useRequireAuth';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const auth = useContext(AuthContext);

  const redirect = useRequireAuth();

  if (!auth.user) {
    return <></>;
  }

  return (
    <div>
      <HomeSection />
    </div>
  );
};

export default Home;
