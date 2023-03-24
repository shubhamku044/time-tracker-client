import React from 'react';
import { 
  TrackerCon,
  InputBox,
  InputCon,
  TimeSpent,
  TrackerBtnCon,
  BtnTracker
} from './styled';

const TimeTrackerRecorder = () => {
  return (
    <TrackerCon>
      <InputCon>
        <InputBox 
          type='text'
          placeholder='What are you working on?'
        />
      </InputCon>
      <TrackerBtnCon>
        <TimeSpent>
          00:00:00
        </TimeSpent>
        <BtnTracker>
          Start
        </BtnTracker>
      </TrackerBtnCon>
    </TrackerCon>
  );
};

export default TimeTrackerRecorder;
