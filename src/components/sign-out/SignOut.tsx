import React from 'react';
import s from './SignOut.module.scss';
import { Button } from '../button/Button';
import { useRequireAuth } from '../../contexts/auth/useRequireAuth';

export const SignOut = () => {
  const auth = useRequireAuth();
  return (
    <div className={s.ButtonWrapper}>
      <Button secondary={true} onClick={auth.logout} processing={undefined}>
        sign out
      </Button>
    </div>
  );
};
