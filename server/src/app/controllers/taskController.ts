import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import { PrismaClient } from '@prisma/client';
import moment from 'moment';

const prisma = new PrismaClient();

const getTasks = catchAsync(async (_: Request, res: Response) => {
  const data = await prisma.tasks.findMany();

  res.status(StatusCodes.OK).json({
    message: 'Success',
    data
  });
});

const createTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { projectName, description } = req.body;

  if (!projectName.length) {
    return next(new AppError(`No project found with name: ${projectName}`, StatusCodes.NOT_FOUND));
  }

  const task = await prisma.tasks.create({
    data: {
      projectName,
      isRunning: true,
      description,
      createdAt: moment().utcOffset(330).toDate()
    }
  });

  res.status(StatusCodes.OK).json({
    message: 'Success',
    data: task
  });
});

const finishTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await prisma.tasks.update({
    where: {
      id
    },
    data: {
      isRunning: false,
      finishedAt: moment().utcOffset(330).toDate()
    }
  });

  res.status(StatusCodes.OK).json({
    message: 'successfully task finished',
    data: task
  });
});

const updateTask = catchAsync(async () => {
  console.log('Hello');
});

const deleteTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const task = await prisma.tasks.delete({
    where: {
      id
    }
  });

  if (!task) {
    return next(new AppError(`No task found with id: ${id}`, StatusCodes.NOT_FOUND));
  }

  res.status(StatusCodes.OK).json({
    message: 'Successfully deleted',
    data: task,
  });
});

export { createTask, getTasks, finishTask, updateTask, deleteTask };
