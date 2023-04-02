import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AdminPanel } from '../components/admin-panel/AdminPanel';
import { LoadingSpinner } from '../components/loading-page/LoadingPage';
import { useProvideAuth } from '../contexts/auth/useProvideAuth';

const Admin = () => {
  const auth = useProvideAuth();
  const router = useRouter();

  if (!auth.user) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  if (auth.user?.is_admin) {
    return (
      <>
        <AdminPanel />
      </>
    );
  } else {
    router.push('/');
  }
};

export default Admin;
