import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Project, Task } from './../models/index.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import moment from 'moment';


const getTasks = catchAsync(async (_: Request, res: Response) => {
  const tasks = await Task.find({});

  res.status(StatusCodes.OK).json({
    message: 'Success',
    tasks
  });
});

const createTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { projectName, desc } = req.body;

  const project = await Project.find({ name: projectName });

  if (!project.length) {
    return next(new AppError(`No project found with name: ${projectName}`, StatusCodes.NOT_FOUND));
  }

  const startTime = moment().utcOffset(330).format('lll');

  const task = {
    projectName,
    desc,
    isRunning: true,
    startTime,
    endTime: '',
    duration: null,
  };

  const newTask = await Task.create(task);

  res.status(StatusCodes.OK).json({
    message: 'Project created successfully',
    newTask
  });
});

const finishTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await Task.findById({ _id: id });

  if (task.isRunning) {
    const endTime = moment().utcOffset(330).format('lll');

    task.endTime = endTime;
    task.duration = parseFloat(moment.duration(moment(endTime).diff(moment(task.startTime))).as('hours').toFixed(2));
    task.isRunning = false;
  }

  await task.save();

  res.status(StatusCodes.OK).json({
    message: 'Successfully updated the task',
    task
  });
});

const updateTask = catchAsync(async (req: Request, res: Response) => {
  console.log('Hello');
});

const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete({ _id: id });

  res.status(StatusCodes.OK).json({
    message: 'Successfully deleted',
    task
  });
});

export { createTask, getTasks, finishTask, updateTask, deleteTask };
