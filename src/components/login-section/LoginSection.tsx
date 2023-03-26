import React, { useContext, useState } from 'react';
import { Button } from '../button/Button';
import { TextInput } from '../text-input/TextInput';
import s from './LoginSection.module.scss';
import { AuthContext } from '../../contexts/AuthContext';

export const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const auth = useContext(AuthContext);

  const user = {
    email: email,
    password: password,
  };

  const handleLogin = async () => {
    await auth.login(user);
  };

  return (
    <div className={s.LoginSectionContainer}>
      <div className={s.LoginSectionWrapper}>
        <h1 className={s.Title}>target</h1>
        <TextInput
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target?.value)
          }
          type={'text'}
          title={'email'}
        />
        <TextInput
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          type={'password'}
          title={'password'}
        />
        <Button processing={processing} secondary={false} onClick={handleLogin}>
          login
        </Button>
      </div>
    </div>
  );
};
