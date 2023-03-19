import React, { useEffect } from "react";

import { LoginSection } from "../components/login-section/LoginSection";

const Login = () => {
  console.log(process.env);
  return (
    <div>
      <LoginSection />
    </div>
  );
};

export default Login;
