import React from 'react';
import s from './UserCard.module.scss';

interface IProps {
  user: {
    firstName: string;
    lastName: string;
    averageTime: string;
    successful: number;
  };
  position: number;
}

export const UserCard = ({ user, position }: IProps) => {
  return (
    <div className={s.BoardContainer}>
      <div className={s.MainSection}>
        <div className={s.SectionWrapper}>
          <p className={s.Position}>{position + 1}.</p>
          <h2 className={s.Name}>{user.firstName}</h2>
        </div>
        <p className={s.Time}>{user.averageTime}</p>
      </div>
    </div>
  );
};
