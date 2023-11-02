import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const project = await prisma.projects.findUnique({
    where: {
      id
    }
  });

  res.status(StatusCodes.OK).json({
    status: 'success',
    project
  });
});

const getAllProjects = catchAsync(async (_: Request, res: Response) => {
  const data = await prisma.projects.findMany();

  res.status(StatusCodes.OK).json({
    status: 'success',
    projects: data,
  });
});

const addProject = catchAsync(async (req: Request, res: Response) => {
  const { name } = req.body;

  const project = await prisma.projects.create({
    data: {
      name
    }
  });

  res.status(StatusCodes.OK).json({
    msg: 'Success',
    project
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const project = await prisma.projects.delete({
    where: {
      id
    }
  });

  res.status(StatusCodes.OK).json({
    msg: 'Deleting project',
    project
  });
});

export { getProject, getAllProjects, addProject, deleteProject };
