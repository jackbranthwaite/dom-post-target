import React from 'react';
import s from './LoadingPage.module.scss';

export const LoadingSpinner = () => {
  return (
    <div className={s.LoadingWrapper}>
      <div className={s.LoadingSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
