import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

interface ITask {
  projectName: string;
  desc: string;
  isRunning?: boolean;
  startTime?: string;
  endTime?: string;
  duration?: number;
}

const TaskSchema = new Schema<ITask>({
  projectName: {
    type: String,
    required: [true, 'Project name is required']
  },
  desc: {
    type: String,
    required: [true, 'Task description is required']
  },
  isRunning: {
    type: Boolean,
  },
  startTime: {
    type: String,
    default: moment().format('lll')
  },
  endTime: {},
  duration: {
    type: Number
  }
});


const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;
