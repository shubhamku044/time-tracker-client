import express from 'express';
import type { IRouter, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router: IRouter = express.Router();

router.get('/', (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    msg: 'Success'
  });
});

export default router;
