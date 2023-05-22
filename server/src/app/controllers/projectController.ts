import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Project } from './../models/index.js';
import catchAsync from '../utils/catchAsync.js';

const getProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const project = await Project.findById({ _id: id });


  res.status(StatusCodes.OK).json({
    status: 'success',
    project
  });
});

const getAllProjects = catchAsync(async (_: Request, res: Response) => {
  const projects = await Project.find({});

  res.status(StatusCodes.OK).json({
    status: 'success',
    projects
  });
});

const addProject = catchAsync(async (req: Request, res: Response) => {
  const { name } = req.body;

  const project = new Project({
    name
  });

  await project.save();

  res.status(StatusCodes.OK).json({
    msg: 'Success',
    project
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  await Project.findOneAndDelete({ _id: id });

  res.status(StatusCodes.OK).json({
    msg: 'Deleting project'
  });
});


export { getProject, getAllProjects, addProject, deleteProject };
