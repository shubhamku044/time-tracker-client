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
import { deleteTimeStamp } from '../../store/actions';
import { useAppDispatch } from '../../hooks';

interface IProps {
  id: string;
  desc: string;
  timeWorked: string;
  startTime: string;
  endTime: string;
  projectName: string;
}

const TimeTrackerResult = ({ id, desc, timeWorked, startTime, endTime, projectName }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <DateCon>
        Wed, Mar 22
      </DateCon>
      <ResultCon>
        <ConText>
          <Desc>
            {desc ? desc : 'Not mentioned'}
          </Desc>
          <ProjectName>
            {projectName ? projectName : 'Abreader'}
          </ProjectName>
        </ConText>
        <div>
          <p>
            {startTime} - {endTime} 
          </p>
        </div>
        <TrackerConRight>
          <TimeSpent>
            {timeWorked}
          </TimeSpent>
          <BinIcon
            onClick={() => {
              dispatch(deleteTimeStamp(id));
            }}
          />
        </TrackerConRight>
      </ResultCon>
    </div>
  );
};

export default TimeTrackerResult;
