import React, { ReactNode, useState } from 'react';
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner';
import s from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  secondary: boolean;
  processing: boolean;
}

export const Button = ({
  children,
  onClick,
  secondary,
  processing,
}: ButtonProps) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={s.ButtonContainer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        className={!secondary ? s.Button : s.SecondaryButton}
        onClick={!processing ? onClick : () => {}}
      >
        {children}
      </button>
      {/* {processing && <LoadingSpinner color={hover ? '#fff' : '#485570'} />} */}
    </div>
  );
};
