import React, { createRef, useEffect, useRef } from 'react';
import s from './Target.module.scss';
import { gsap } from 'gsap';
import { LetterItem } from './letter-item/LetterItem';

interface TargetProps {
  word: string;
  correct: boolean;
  noLetters: boolean;
  addLetter: (e: string) => void;
}

export const Target = ({
  word,
  correct,
  noLetters,
  addLetter,
}: TargetProps) => {
  const empty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const boxRefs = useRef<Array<HTMLDivElement | null>>([]);

  const fadeIn = () => {
    boxRefs.current?.map((i, j) => {
      const tl = gsap.timeline({ delay: j * 0.2 });
      tl.to(boxRefs?.current[j], {
        backgroundColor: 'rgba(0, 270, 0, 0.2)',
        duration: 0.5,
      });
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (correct) {
        fadeIn();
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
          <LetterItem letter={letter} key={i} addLetter={(e) => addLetter(e)} />
        );
      })}
    </div>
  );
};
