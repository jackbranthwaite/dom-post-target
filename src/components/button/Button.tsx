import React, { ReactNode } from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  secondary: boolean;
}

export const Button = ({ children, onClick, secondary }: ButtonProps) => {
  return (
    <div className={s.ButtonContainer}>
      <button
        className={!secondary ? s.Button : s.SecondaryButton}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
