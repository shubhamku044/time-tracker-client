import express from 'express';
import type { IRouter, Request, Response } from 'express';


const router: IRouter = express.Router();

router.get('/', (_: Request, res: Response) => {
  res.status(200).json({
    msg: 'Successfully database connected...'
  });
});

export default router;
