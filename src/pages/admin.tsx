import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AdminPanel } from '../components/admin-panel/AdminPanel';
import { useProvideAuth } from '../contexts/auth/useProvideAuth';

const Admin = () => {
  const auth = useProvideAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.user?.is_admin) {
      router.push('/');
    }
  }, []);

  if (auth.user)
    return (
      <div>
        <AdminPanel></AdminPanel>
      </div>
    );
};

export default Admin;
