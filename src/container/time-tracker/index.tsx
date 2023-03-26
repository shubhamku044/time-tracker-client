import React, { useEffect } from 'react';
import { Con, ResultsCon } from './styled';
import { TimeTrackerRecorder, TimeTrackerResult } from '../../components';
import { useAppSelector } from '../../hooks';

const TimeTracker = () => {

  const timeStamps = useAppSelector(state => state.timer.value);

  return (
    <Con>
      <TimeTrackerRecorder />
      <ResultsCon>
        {timeStamps.map(({ id, desc, timeWorked, startTime, endTime, projectName}) => {
          return(
            <TimeTrackerResult
              key={id}
              id={id}
              desc={desc}
              timeWorked={timeWorked}
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
