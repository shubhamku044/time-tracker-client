import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Project, Task } from './../models/index.js';
import catchAsync from '../utils/catchAsync.js';

const getTasks = catchAsync(async (req: Request, res: Response) => {
  const tasks = await Task.find({});

  res.status(StatusCodes.OK).json({
    message: 'Success',
    tasks
  });
});

const createTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const project = await Project.findById({ _id: id });

  res.status(StatusCodes.OK).json({
    message: 'Project created successfully',
    project
  });
});

export { createTask, getTasks };
