import mongoose, { Schema } from 'mongoose';

interface ITask {
  projectName: string;
  desc: string;
  isRunning: boolean;
  startTime?: string;
  endTime?: string;
  duration: number | null;
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
  },
  endTime: {
    type: String
  },
  duration: {
    type: Number
  }
});


const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;
