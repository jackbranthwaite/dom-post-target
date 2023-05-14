import React, { useEffect } from 'react';

import { LoginSection } from '../components/login-section/LoginSection';
import { useRequireGuest } from '../contexts/auth/useRequireGuest';

const Login = () => {
  const auth = useRequireGuest();
  if (auth.user !== false) {
    return <></>;
  }

  return (
    <div>
      <LoginSection />
    </div>
  );
};

export default Login;
