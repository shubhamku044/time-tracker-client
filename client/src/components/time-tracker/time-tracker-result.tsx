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
import { useAppDispatch } from '../../hooks';
import moment from 'moment';
import { deleteTask } from '../../store/actions';

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

  const formatTime = (time: string): string => moment(time, 'MMMM D, YYYY h:mm:ss A').format('HH:mm');

  return (
    <div>
      <DateCon>
        Wed, Mar 22
      </DateCon>
      <ResultCon>
        <ConText>
          <Desc>
            This is the desc
          </Desc>
          <ProjectName>
            Abreader
          </ProjectName>
        </ConText>
        <div>
          <p>
            22:00 - 00:00
          </p>
        </div>
        <TrackerConRight>
          <TimeSpent>
            2 hr
          </TimeSpent>
          <BinIcon
            onClick={() => dispatch(deleteTask(id))}
          />
        </TrackerConRight>
      </ResultCon>
    </div>
  );
};

export default TimeTrackerResult;
