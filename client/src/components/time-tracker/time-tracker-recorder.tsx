import React, { useState, useEffect } from 'react';
import {
  TrackerCon,
  InputBox,
  InputCon,
  TimeSpent,
  TrackerBtnCon,
  BtnTracker
} from './styled';
import { useAppDispatch } from '../../hooks';
import { addTimeStamps } from '../../store/actions';
import { v4 as uuidv4 } from 'uuid';

const TimeTrackerRecorder = () => {
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [hrs, setHrs] = useState<number>(0);
  const [desc, setDesc] = useState<string>('');
  const [starttime, setStartTime] = useState<Date>(new Date());


  const tick = (): void => {
    setSec(prvSec => (prvSec + 1) % 60);
    if (sec === 59) setMin(prvMin => (prvMin + 1) % 60);
  };

  const formatTime = (hours = 0, minutes = 0, seconds = 0): string => {
    const hrs = hours.toString().padStart(2, '0');
    const min = minutes.toString().padStart(2, '0');
    const sec = seconds.toString().padStart(2, '0');

    return `${hrs}:${min}:${sec}`;
  };

  /* const calcHours = (): number => {
    let timeSpent = hrs + (min / 60) + (sec / (60 * 60));
    timeSpent = Math.round(timeSpent * 100) / 100;
    return timeSpent;
  }; */

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!timerStarted) return;
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  });

  const addData = async (startTime: string, endTime: string, desc: string, timeWorked: string, projectName: string) => {
    try {
      console.log('trying');
    } catch (err) {
      console.log('ERROR');
    }
  };

  const handleBtnClick = () => {
    setTimerStarted(!timerStarted);
    const endDate: Date = new Date();
    if (timerStarted) {
      const startdate: Date = new Date();
      setStartTime(startdate);
      const startTime = `${starttime.getHours()}:${starttime.getMinutes()}`;
      const endTime = `${endDate.getHours()}:${endDate.getMinutes()}`;
      const timeWorked = formatTime(hrs, min, sec);
      const projectName = 'abreader';

      setSec(0);
      setHrs(0);
      setMin(0);
      setDesc('');
      addData(startTime, endTime, desc, timeWorked, projectName);
    }
  };

  return (
    <TrackerCon>
      <InputCon>
        <InputBox
          type='text'
          placeholder='What are you working on?'
          disabled={timerStarted}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDesc(e.target.value);
          }}
          value={desc}
        />
      </InputCon>
      <TrackerBtnCon>
        <TimeSpent>
          {formatTime(hrs, min, sec)}
        </TimeSpent>
        <BtnTracker
          timerStarted={timerStarted}
          onClick={handleBtnClick}
        >
          {timerStarted ? 'Stop' : 'Start'}
        </BtnTracker>
      </TrackerBtnCon>
    </TrackerCon>
  );
};

export default TimeTrackerRecorder;
