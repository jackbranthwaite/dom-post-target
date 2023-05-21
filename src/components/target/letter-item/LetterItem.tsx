import React, { useEffect, useRef, useState } from 'react';
import s from './LetterItem.module.scss';
import { gsap } from 'gsap';

export const LetterItem = ({
  letter,
  addLetter,
}: {
  letter: string;
  addLetter: (e: string) => void;
}) => {
  const [used, setUsed] = useState(false);
  const letterRef = useRef(null);

  const useLetter = () => {
    if (!used) {
      animateClick();
      addLetter(letter);
    } else {
      return;
    }
  };

  const animateClick = () => {
    if (letterRef.current) {
      console.log('Help');
      gsap.to(letterRef.current, {
        backgroundColor: 'rgba(255, 255, 0, 0.2)',
        duration: 0.5,
        onComplete: () => setUsed(true),
      });
    }
  };
  return (
    <div
      className={s.LetterBox}
      key={letter}
      onClick={() => useLetter()}
      ref={letterRef}
    >
      <p className={s.Letter}>{letter}</p>
    </div>
  );
};
