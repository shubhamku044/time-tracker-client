import { Con, ResultsCon } from './styled';
import { TimeTrackerRecorder, TimeTrackerResult } from '../../components';
import { useAppSelector } from '../../hooks';

const TimeTracker = () => {

  const timeStamps = useAppSelector(state => state.timer.value);
  console.log(timeStamps);

  return (
    <Con>
      <TimeTrackerRecorder />
      <ResultsCon>
        {timeStamps.map(({ id, projectDescription, startTime, endTime, projectName, isRunning }) => {
          return (
            <TimeTrackerResult
              key={id}
              id={id}
              desc={projectDescription}
              timeWorked={'21'}
              startTime={startTime}
              endTime={endTime}
              projectName={projectName}
            />
          );
        })}
      </ResultsCon>
    </Con>
  );
};

export default TimeTracker;
