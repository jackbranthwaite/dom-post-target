import React from 'react';
import s from './LoadingSpinner.module.scss';

interface Props {
  color: string;
}

export const LoadingSpinner = ({ color }: Props) => {
  return (
    <div className={s.LoadingSpinner} style={{ color }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
