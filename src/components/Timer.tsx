import React, { useState, useEffect } from 'react';

const Timer = ({ name, startTime }: {name:string, startTime: string}): JSX.Element => {
  const [stop, setStop] = useState<boolean>(false);
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [hrs, setHrs] = useState<number>(0);

  const tick = (): void => {
    if(stop) return;
    setSec(prvSec => (prvSec + 1) % 60);
    if (sec === 59) setMin(prvMin => (prvMin + 1) % 60);
  };

  const formatTime = (hours = 0, minutes = 0, seconds = 0): string => {
    const hrs = hours.toString().padStart(2, '0');
    const min = minutes.toString().padStart(2, '0');
    const sec = seconds.toString().padStart(2, '0');

    return `${hrs}:${min}:${sec}`;
  };

  const calcHours = (): number => {
    let timeSpent = hrs + (min / 60) + (sec / (60 * 60));
    timeSpent = Math.round(timeSpent * 100) / 100;
    return timeSpent;
  };

  useEffect(() => {
    if(stop) return;
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  });
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '20rem',
        padding: '.2rem .6rem'
      }}
    >
      <p>
        {name}
      </p>
      <div
        style={{
          display: 'flex',
          gap: '0.2rem'
        }}
      >
        <p>
          {startTime}
        </p>
        <p>
          {formatTime(hrs, min, sec)}
        </p>
        <p>
          {calcHours()}
        </p>
        {!stop && (
          <button onClick={() => setStop(true)}>
            stop
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
