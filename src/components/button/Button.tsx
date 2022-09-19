import React, { ReactNode } from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div className={s.ButtonContainer}>
      <button className={s.Button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
