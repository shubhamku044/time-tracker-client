import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Project } from '../models/index.js';

const getProject = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    msg: 'Get one project'
  });
};

const getAllProjects = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    msg: 'Get all projects'
  });
};

const addProject = async (req: Request, res: Response) => {
  const { id, firstName, lastName } = req.body;



  res.status(StatusCodes.OK).json({
    msg: 'Adding projectt'
  });
};

const deleteProject = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    msg: 'Deleting project'
  });
};

export { getProject, getAllProjects, addProject, deleteProject };
