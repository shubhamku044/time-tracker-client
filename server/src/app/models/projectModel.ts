import mongoose, { Schema } from 'mongoose';

interface ITask {
  desc: string;
  isRunning: boolean;
  startTime: string;
}

interface IProject {
  name: string;
  tasks: Array<ITask>;
}

const TaskSchema = new Schema<ITask>({
  desc: {
    type: String,
    required: [true, 'Task description is required']
  },
  isRunning: {
    type: Boolean,
  },
  startTime: {
    type: String,
    required: true
  }
});

const ProjectSchema = new Schema<IProject>({
  name: {
    type: String,
    required: [true, 'Project name is must'],
    unique: true
  },
  tasks: {
    type: [TaskSchema]
  }
});

const Project = mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
