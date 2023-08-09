import React, { useState, useEffect } from 'react';
import {
  TrackerCon,
  InputBox,
  InputCon,
  TimeSpent,
  TrackerBtnCon,
  BtnTracker,
  AvaiProjectsCon,
  Projects,
  SelectProject,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addTask } from '../../store/actions';
import moment from 'moment';

interface ITimerState {
  id: string;
  startTime: string;
  endTime: string;
  projectDescription: string;
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
  const [showProject, setShowProject] = useState<boolean>(false);
  const [runningTimer, setRunningTimer] = useState<ITimerState>();
  const [selectedproject, setSelectedProject] = useState<string>('Abreader');

  const timeStamps = useAppSelector(state => state.timer.value);
  const projectsName = useAppSelector(state => state.projects.value);

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
  const startTime = moment().utcOffset(330).format('MMMM D, YYYY h:mm:ss A');

  const createTask = async () => {
    if (!desc) return;
    try {
      const data = {
        projectDescription: desc,
        projectName: selectedproject,
        startTime: moment().utcOffset(330).format('MMMM D, YYYY h:mm:ss A'),
      };
      const res = await fetch(`${apiUrl}/tasks`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resJson = await res.json();
      console.log(resJson);
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
        <AvaiProjectsCon>
          <SelectProject projectSelected={selectedproject ? true : false} onClick={() => setShowProject(prv => !prv)}>
            {selectedproject ? selectedproject : 'Select Project'}
          </SelectProject>
          <Projects showProject={showProject}>
            {projectsName.map((project) => {
              return (
                <li
                  key={project._id}
                  onClick={() => {
                    setSelectedProject(project.name);
                    setShowProject(false);
                  }}
                >
                  {project.name}
                </li>
              );
            })}
          </Projects>
        </AvaiProjectsCon>
      </InputCon>
      <TrackerBtnCon>
        <TimeSpent>
          22:00:00
        </TimeSpent>
        <BtnTracker
          timerStarted={timerStarted}
          onClick={createTask}
        >
          Start
        </BtnTracker>
      </TrackerBtnCon>
    </TrackerCon >
  );
};

export default TimeTrackerRecorder;
