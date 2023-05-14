import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import s from './Timer.module.scss';

export const Timer = ({ currentTime }: { currentTime: (e: any) => void }) => {
  interface ITimer {
    hours: string;
    minutes: string;
    seconds: string;
  }
  const calculateTimeLeft = () => {
    const splitter = new Date();
    const time = splitter.toString().split(' ');
    time[4] = '23:59';
    const date = time.join(' ');

    const difference = +new Date(date) - +new Date();

    let timeLeft: ITimer;

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)).toString(),
        minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
        seconds: Math.floor((difference / 1000) % 60).toString(),
      };
    } else {
      timeLeft = {
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      currentTime(calculateTimeLeft());
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className={s.TimerContainer}>
      <div className={s.Timer}>
        {(timeLeft.hours || timeLeft.minutes || timeLeft.seconds) && (
          <p>
            <span>
              {timeLeft.hours.length === 1 ? '0' : null}
              {timeLeft.hours}
            </span>
            <span>:</span>
            <span>
              {timeLeft.minutes.length === 1 ? '0' : null}
              {timeLeft.minutes}
            </span>
            <span>:</span>
            <span>
              {timeLeft.seconds.length === 1 ? '0' : null}
              {timeLeft.seconds}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
