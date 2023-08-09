import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import moment from 'moment';
import { AppDataSource } from '../../server.js';
import { TaskModel } from '../entities/index.js';

const getTasks = catchAsync(async (_: Request, res: Response) => {
  const data = await AppDataSource.manager.find(TaskModel);

  res.status(StatusCodes.OK).json({
    message: 'Success',
    data,
  });
});

const createTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { projectName, projectDescription } = req.body;

  if (!projectName.length) {
    return next(new AppError(`No project found with name: ${projectName}`, StatusCodes.NOT_FOUND));
  }

  const startTime = moment().utcOffset(330).format('MMMM D, YYYY h:mm:ss A');

  const task = {
    projectName,
    projectDescription,
    isRunning: true,
    startTime,
    endTime: '',
  };

  const data = await AppDataSource.manager.save(TaskModel, task);
  console.log(data);

  res.status(StatusCodes.OK).json({
    message: 'Project created successfully',
    data
  });
});

const finishTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(StatusCodes.OK).json({
    message: 'Successfully updated the task',
  });
});

const updateTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  console.log('Hello');
});

const deleteTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const task = await AppDataSource.getRepository(TaskModel).findOneBy({ id: Number(id) });

  if (!task) {
    return next(new AppError(`No task found with id: ${id}`, StatusCodes.NOT_FOUND));
  }

  await AppDataSource.getRepository(TaskModel).remove(task);

  res.status(StatusCodes.OK).json({
    message: 'Successfully deleted',
    data: task,
  });
});

export { createTask, getTasks, finishTask, updateTask, deleteTask };
