import React, { useState, useEffect } from 'react';
import style from './DigitalClock.module.css';

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTwoDigits = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  let hours = time.getHours();
  const isPM = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  const formattedHours = formatTwoDigits(hours);
  const minutes = formatTwoDigits(time.getMinutes());
  const seconds = formatTwoDigits(time.getSeconds());

  return (
    <div className={style.clockContainer}>
      <div className={style.clockBox}>
        <h1 className={style.clockTitle}>
          Digital Clock
        </h1>
        <div className={style.clockTime}>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p className={style.clockDate}>
          {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
};