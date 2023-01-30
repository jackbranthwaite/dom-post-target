import React, { ReactNode } from "react";
import s from "./Button.module.scss";

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
  return (
    <div
      className={s.ButtonContainer}
      style={processing ? { opacity: 0.6 } : { opacity: 1 }}
    >
      <button
        className={!secondary ? s.Button : s.SecondaryButton}
        onClick={!processing ? onClick : () => {}}
      >
        {children}
      </button>
    </div>
  );
};
