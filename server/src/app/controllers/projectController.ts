import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync.js';
import { AppDataSource } from '../../server.js';
import TaskModel from '../entities/taskModel.js';

const getProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(StatusCodes.OK).json({
    status: 'success',
  });
});

const getAllProjects = catchAsync(async (_: Request, res: Response) => {
  const data = await AppDataSource.manager.find(TaskModel);

  console.log(TaskModel);
  console.log('data', data);

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: []
  });
});

const addProject = catchAsync(async (req: Request, res: Response) => {
  const { name } = req.body;

  res.status(StatusCodes.OK).json({
    msg: 'Success',
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(StatusCodes.OK).json({
    msg: 'Deleting project'
  });
});

export { getProject, getAllProjects, addProject, deleteProject };
