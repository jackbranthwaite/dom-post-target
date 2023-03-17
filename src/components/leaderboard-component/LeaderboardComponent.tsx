import React from "react";
import s from "./LeaderboardComponent.module.scss";

export const LeaderboardComponent = () => {
  const users = [
    {
      name: "Jack",
      time: 1.5,
    },
    {
      name: "Jayne",
      time: 1.1,
    },
    {
      name: "Jamie",
      time: 1.8,
    },
    {
      name: "Ryan",
      time: 2,
    },
    {
      name: "Meike",
      time: 1.9,
    },
    {
      name: "Vincent",
      time: 0.3,
    },
  ];

  const localUsers = users.sort((a, b) => {
    return a.time - b.time;
  });

  return (
    <div className={s.LeaderboardWrapper}>
      <div className={s.Leaderboard}>
        <div className={s.TitleElement}>
          <p className={s.Name}>Name</p>
          <p className={s.Time}>Time</p>
        </div>
        {localUsers?.map((user) => {
          return (
            <div className={s.UserElement}>
              <p className={s.Name}>
                {user.name} | {user.time}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
