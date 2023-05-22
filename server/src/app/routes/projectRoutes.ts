import express from 'express';
import type { IRouter } from 'express';
import { addProject, deleteProject, getAllProjects, getProject } from '../controllers/index.js';


const router: IRouter = express.Router();

router.route('/').get(getAllProjects).post(addProject);
router.route('/:id').get(getProject).delete(deleteProject);

export default router;
