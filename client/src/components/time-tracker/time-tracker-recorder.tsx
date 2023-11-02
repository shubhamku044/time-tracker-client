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
import { getProjectsData, getTimerData } from '../../store/actions';
import moment from 'moment';

interface ITimerState {
  id: string;
  projectName: string;
  description: string;
  createdAt: string;
  isRunning: boolean;
  finishedAt: string;
}

const apiUrl = new URL(import.meta.env.VITE_API_KEY as string);

interface IProps {
  projects: Array<ITimerState>;
}

const TimeTrackerRecorder = ({ projects }: IProps) => {
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [startedAt, setStartedAt] = useState<string>('');
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [hrs, setHrs] = useState<number>(0);
  const [desc, setDesc] = useState<string>('');
  const [showProject, setShowProject] = useState<boolean>(false);
  const [runningTimer, setRunningTimer] = useState<ITimerState>();
  const [selectedproject, setSelectedProject] = useState<string>('');
  const [projectName, setProjectName] = useState<string>('');

  const tick = (): void => {
    const currTime = moment();
    const startTime = moment(startedAt);
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

  const projectsName = useAppSelector(state => state.projects.value);

  const finishTask = async (): Promise<void> => {
    try {
      const res = await fetch(`${apiUrl}/tasks/finish/${runningTimer?.id}`, {
        method: 'PATCH',
      });
      if (res.status !== 200) throw new Error('Something went wrong');
      setTimerStarted(false);
      setRunningTimer(undefined);
      setDesc('');
      setStartedAt('');
      dispatch(getTimerData());
      setSec(0);
      setMin(0);
      setHrs(0);
    } catch (err) {
      console.log(err);
    }
  };

  const createProject = async () => {
    if (projectName.length === 0) return;
    try {
      const projectData = {
        name: projectName
      };
      const res = await fetch(`${apiUrl}/projects`, {
        method: 'POST',
        body: JSON.stringify(projectData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.status === 200) {
        dispatch(getProjectsData());
        setProjectName('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const startTask = async (): Promise<void> => {
    try {
      const res = await fetch(`${apiUrl}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectName: selectedproject,
          description: desc,
        })
      });
      const data = await res.json();
      if (res.status === 200) {
        setTimerStarted(true);
        setRunningTimer(data.data);
        setStartedAt(data.data.createdAt);
        console.log(moment(data.data.createdAt, 'YYYY-MM-DD HH:mm:ss.SSS').format('HH:MM a'));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const runningProject = projects.filter((project) => {
      return project.isRunning === true;
    });

    if (runningProject?.length) {
      setRunningTimer(runningProject[0] as ITimerState);
      setTimerStarted(true);
      setDesc(runningProject[0].description);
      setStartedAt(runningProject[0].createdAt);
      setSelectedProject(runningProject[0].projectName);
    }
  }, [projects]);

  useEffect(() => {
    if (timerStarted) {
      const interval = setInterval(() => {
        tick();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerStarted]);

  return (
    <TrackerCon>
      <InputCon>
        <InputBox
          type="text"
          placeholder="What are you working on?"
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
            {projectsName.map((project, id) => {
              return (
                <li key={id}>
                  <button
                    onClick={() => {
                      setSelectedProject(project.name);
                      setShowProject(false);
                    }}
                  >
                    {project.name}
                  </button>
                </li>
              );
            })}
            <div>
              <input
                placeholder="project name"
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
                value={projectName}
              />
              <button
                style={{ fontSize: '2rem', color: 'black' }}
                onClick={createProject}
              >+</button>
            </div>
          </Projects>
        </AvaiProjectsCon>
      </InputCon>
      <TrackerBtnCon>
        <TimeSpent>
          {formatTime(hrs, min, sec)}
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
            onClick={startTask}
          >
            Start
          </BtnTracker>
        )}
      </TrackerBtnCon>
    </TrackerCon >
  );
};

export default TimeTrackerRecorder;
