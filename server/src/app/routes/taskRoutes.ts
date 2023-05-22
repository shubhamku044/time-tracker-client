import { Router } from 'express';
import type { IRouter } from 'express';
import { createTask, getTasks } from '../controllers/index.js';

const router: IRouter = Router();

router.route('/').get(getTasks).post(createTask);

export default router;
