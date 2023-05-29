import { Router } from 'express';
import type { IRouter } from 'express';
import { createTask, deleteTask, finishTask, getTasks, updateTask } from '../controllers/index.js';

const router: IRouter = Router();

router.route('/').post(createTask).get(getTasks);
router.route('/:id').patch(updateTask).delete(deleteTask);
router.route('/finish/:id').patch(finishTask);

export default router;
