import { Router } from 'express';
import { timeline } from '../controllers/postControllers';

const postRouter = Router();
postRouter.get("/timeline", timeline);

export default postRouter;