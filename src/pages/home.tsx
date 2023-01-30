import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeSection } from "../components/home-section/HomeSection";
import { useRequireAuth } from "../contexts/auth/useRequireAuth";

const Home = () => {
  const auth = useRequireAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (!auth?.user) {
        navigate("/login");
      }
    }
    return () => {
      mounted = false;
    };
  }, [auth?.user]);

  return (
    <div>
      <HomeSection />
    </div>
  );
};

export default Home;
