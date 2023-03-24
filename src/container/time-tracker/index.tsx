import React from 'react';
import { Con } from './styled';
import { TimeTrackerRecorder, TimeTrackerResult } from '../../components';

const TimeTracker = () => {
  return (
    <Con>
      <TimeTrackerRecorder />
      <div style={{ marginTop: '2rem' }}>
        <TimeTrackerResult />
      </div>
    </Con>
  );
};

export default TimeTracker;
