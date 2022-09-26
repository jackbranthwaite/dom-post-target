import React from "react";
import { HomeSection } from "../components/home-section/HomeSection";
import { useRequireAuth } from "../contexts/auth/useRequireAuth";

const Home = () => {
  const auth = useRequireAuth();

  if (!auth?.user) return <></>;

  return (
    <div>
      <HomeSection />
    </div>
  );
};

export default Home;
