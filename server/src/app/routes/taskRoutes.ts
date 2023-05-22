import { Router } from 'express';
import type { IRouter } from 'express';
import { createTask, deleteTask, finishTask, getTasks, updateTask } from '../controllers/index.js';

const router: IRouter = Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask);
router.route('/finish/:id').patch(finishTask);

export default router;
