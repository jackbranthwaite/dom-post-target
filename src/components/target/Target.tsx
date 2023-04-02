import React, { useEffect } from 'react';
import s from './Target.module.scss';

interface TargetProps {
  word: string;
  answer: string;
  correct: boolean;
}

export const Target = ({ word, answer, correct }: TargetProps) => {
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (correct) {
        console.log('You fucking won');
      }
    }
    return () => {
      mounted = false;
    };
  }, [correct]);

  if (!word) return;

  return (
    <div className={s.TargetContainer}>
      {word.split('').map((letter, i) => {
        return (
          <div className={s.LetterBox} key={letter + i}>
            <p className={s.Letter}>{letter}</p>
          </div>
        );
      })}
    </div>
  );
};
