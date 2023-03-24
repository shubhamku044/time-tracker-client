import React from 'react';
import { 
  ResultCon,
  DateCon,
  ConText,
  Desc,
  ProjectName,
  TimeSpent,
  TrackerConRight,
  BinIcon
} from './styled';

const TimeTrackerResult = () => {
  return (
    <div>
      <DateCon>
        Wed, Mar 22
      </DateCon>
      <ResultCon>
        <ConText>
          <Desc>
            bug fixes
          </Desc>
          <ProjectName>
            Abreader
          </ProjectName>
        </ConText>
        <div>
          <p>
            11:31 - 12:32
          </p>
        </div>
        <TrackerConRight>
          <TimeSpent>
            01:10:40
          </TimeSpent>
          <BinIcon />
        </TrackerConRight>
      </ResultCon>
    </div>
  );
};

export default TimeTrackerResult;
