import { Con, ResultsCon } from './styled';
import { TimeTrackerRecorder, TimeTrackerResult } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getTimerData } from '../../store/actions';

const TimeTracker = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTimerData());
  }, [dispatch]);

  const timeStamps = useAppSelector(state => state.timer.value);

  return (
    <Con>
      <TimeTrackerRecorder
        projects={timeStamps}
      />
      <ResultsCon>
        {timeStamps?.filter(task => !task.isRunning).map(({ id, description, createdAt, finishedAt, projectName, isRunning }) => {
          return (
            <TimeTrackerResult
              key={id}
              id={id}
              desc={description}
              createdAt={createdAt}
              finishedAt={finishedAt}
              projectName={projectName}
            />
          );
        })}
      </ResultsCon>
    </Con>
  );
};

export default TimeTracker;
