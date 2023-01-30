import React, { useEffect } from "react";
import { Router, useNavigate } from "react-router-dom";
import { LoginSection } from "../components/login-section/LoginSection";
import { useProvideAuth } from "../contexts/auth/useProvideAuth";
import { useRequireGuest } from "../contexts/auth/useRequireGuest";

const Login = () => {
  const auth = useRequireGuest();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (auth?.user) {
        navigate("/home");
      }
    }
    return () => {
      mounted = false;
    };
  }, [auth?.user]);

  return (
    <div>
      <LoginSection />
    </div>
  );
};

export default Login;
