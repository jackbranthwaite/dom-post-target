import React, { useEffect } from 'react';
import s from './Target.module.scss';

interface TargetProps {
  word: string;
  correct: boolean;
  noLetters: boolean;
}

export const Target = ({ word, correct, noLetters }: TargetProps) => {
  const empty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  if (!word) {
    return (
      <div className={s.TargetContainer}>
        {empty.map((i: number) => {
          return <div className={s.LetterBox} key={i}></div>;
        })}
      </div>
    );
  }

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
