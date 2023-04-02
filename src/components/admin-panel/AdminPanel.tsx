import React, { useState } from 'react';
import { addLetters } from '../../services/api/add_letters';
import { Button } from '../button/Button';
import { LoadingSpinner } from '../loading-page/LoadingPage';
import { TextInput } from '../text-input/TextInput';
import s from './AdminPanel.module.scss';

export const AdminPanel = () => {
  const [newLetters, setNewLetters] = useState('');
  const [addProcessing, setAddProcessing] = useState(false);

  const addLocalLetters = async () => {
    setAddProcessing(true);
    const letters = await addLetters({ letters: newLetters });
    if (letters.status === 201) {
      setAddProcessing(false);
    }
  };

  return (
    <div className={s.AdminContainer}>
      <div className={s.AdminWrapper}>
        <div className={s.TitleWrapper}>
          <h1 className={s.Title}>target</h1>
        </div>
        <TextInput
          title=''
          type='text'
          value={newLetters}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewLetters(e.target?.value)
          }
        />
        <Button
          secondary={false}
          onClick={addLocalLetters}
          processing={addProcessing}
        >
          Add
        </Button>
      </div>
    </div>
  );
};
