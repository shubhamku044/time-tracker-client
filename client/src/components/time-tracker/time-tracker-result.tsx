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
  projectName: string;
  createdAt: string;
  finishedAt: string;
}

const TimeTrackerResult = ({ id, desc, createdAt, finishedAt, projectName }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <DateCon>
        {moment(createdAt).format('MMMM D, YYYY')}
      </DateCon>
      <ResultCon>
        <ConText>
          <Desc>
            {desc}
          </Desc>
          <ProjectName>
            {projectName}
          </ProjectName>
        </ConText>
        <div>
          <p
            onClick={() => {
              console.log('createdAt', createdAt, moment(createdAt).format('HH:MM a'));
            }}
          >
            {moment(createdAt, 'YYYY-MM-DD HH:mm:ss.SSS').format('hh:mm a')} - {moment(finishedAt,'YYYY-MM-DD HH:mm:ss.SSS' ).format('hh:mm a')}
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
