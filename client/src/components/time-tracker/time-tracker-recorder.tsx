import React, { useState, useEffect } from 'react';
import {
  TrackerCon,
  InputBox,
  InputCon,
  TimeSpent,
  TrackerBtnCon,
  BtnTracker
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addTask } from '../../store/actions';
import moment from 'moment';

interface ITimerState {
  _id: string;
  startTime: string;
  endTime: string;
  desc: string;
  projectName: string;
  duration: string;
  isRunning: boolean;
}

const apiUrl = new URL(import.meta.env.VITE_API_KEY as string);

const TimeTrackerRecorder = () => {
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [hrs, setHrs] = useState<number>(0);
  const [desc, setDesc] = useState<string>('');
  const [runningTimer, setRunningTimer] = useState<ITimerState>();

  const timeStamps = useAppSelector(state => state.timer.value);

  const extractTimeFromDate = (time: string): Array<number> => moment(time, 'MMMM D, YYYY h:mm:ss A').format('HH:mm:ss').split(':').map((el) => parseInt(el));

  const tick = (): void => {
    const currTime = moment(moment().utcOffset(330).format('MMMM D, YYYY h:mm:ss A'));
    const startTime = moment(moment(runningTimer?.startTime).format('MMMM D, YYYY h:mm:ss A'));
    const duration = moment.duration(currTime.diff(startTime));
    setSec(duration.get('seconds'));
    setMin(duration.get('minutes'));
    setHrs(duration.get('hours'));
  };

  const formatTime = (hours = 0, minutes = 0, seconds = 0): string => {
    const hrs = hours.toString().padStart(2, '0');
    const min = minutes.toString().padStart(2, '0');
    const sec = seconds.toString().padStart(2, '0');

    return `${hrs}:${min}:${sec}`;
  };


  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!timerStarted) return;
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  });

  useEffect(() => {
    timeStamps.forEach((timeStamp) => {
      if (timeStamp.isRunning) {
        setRunningTimer(timeStamp);
      }
    });
  }, [timeStamps]);

  useEffect(() => {
    if (runningTimer?.isRunning) {
      setTimerStarted(true);
      setDesc(runningTimer.desc);
    }
  }, [runningTimer]);


  const finishTask = () => {
    setTimerStarted(false);
    if (timerStarted && runningTimer?.isRunning) {
      dispatch(addTask(runningTimer?._id));

      setSec(0);
      setHrs(0);
      setMin(0);
      setDesc('');
    }
  };
  const createTask = async () => {
    if (!desc) return;
    try {
      const data = {
        desc,
        projectName: 'kumar'
      };
      const res = await fetch(`${apiUrl}/tasks`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resJson = await res.json();
      setRunningTimer(resJson.task);
      const startTimeArray: Array<number> = extractTimeFromDate((resJson.task as ITimerState).startTime);
      setHrs(startTimeArray[0]);
      setMin(startTimeArray[1]);
      setSec(startTimeArray[2]);
    } catch (err) {
      console.log('Error while creating task', err);
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
          {timerStarted ? formatTime(hrs, min, sec) : '00:00:00'}
        </TimeSpent>
        {timerStarted ? (
          <BtnTracker
            timerStarted={timerStarted}
            onClick={finishTask}
          >
            Stop
          </BtnTracker>
        ) : (
          <BtnTracker
            timerStarted={timerStarted}
            onClick={createTask}
          >
            Start
          </BtnTracker>
        )}
      </TrackerBtnCon>
    </TrackerCon>
  );
};

export default TimeTrackerRecorder;
