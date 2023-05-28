import { Con, ResultsCon } from './styled';
import { TimeTrackerRecorder, TimeTrackerResult } from '../../components';
import { useAppSelector } from '../../hooks';

const TimeTracker = () => {

  const timeStamps = useAppSelector(state => state.timer.value);

  return (
    <Con>
      <TimeTrackerRecorder />
      <ResultsCon>
        {timeStamps.map(({ _id, desc, duration, startTime, endTime, projectName, isRunning }) => {
          if (isRunning) return;
          return (
            <TimeTrackerResult
              key={_id}
              id={_id}
              desc={desc}
              timeWorked={duration}
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
