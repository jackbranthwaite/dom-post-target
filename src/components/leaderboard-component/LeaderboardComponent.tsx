import React from 'react';
import s from './LeaderboardComponent.module.scss';
import { UserCard } from './board-component/UserCard';

export const LeaderboardComponent = () => {
  const users = [
    {
      firstName: 'Jack',
      lastName: 'Lastname',
      averageTime: '1.5',
      successful: 10,
    },
    {
      firstName: 'Jayne',
      lastName: 'Lastname',
      averageTime: '1.1',
      successful: 3,
    },
    {
      firstName: 'Jamie',
      lastName: 'Lastname',
      averageTime: '1.8',
      successful: 1,
    },
    {
      firstName: 'Ryan',
      lastName: 'Lastname',
      averageTime: '2',
      successful: 3,
    },
    {
      firstName: 'Meike',
      lastName: 'Lastname',
      averageTime: '1.9',
      successful: 4,
    },
    {
      firstName: 'Vincent',
      lastName: 'Lastname',
      averageTime: '0.3',
      successful: 6,
    },
  ];

  const localUsers = users.sort((a, b) => {
    return a.averageTime - b.averageTime;
  });

  return (
    <div className={s.LeaderboardContainer}>
      <div className={s.LeaderboardWrapper}>
        <div className={s.LeaderboardTitleWrapper}>
          <h2 className={s.Title}>leaderboard</h2>
          <p>minimum of 5 successful days</p>
        </div>
        <div className={s.Leaderboard}>
          {localUsers.map((a, i) => {
            return <UserCard user={a} key={i} position={i} />;
          })}
        </div>
      </div>
    </div>
  );
};
