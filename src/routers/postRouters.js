import { Router } from 'express';
import { timeline } from '../controllers/postControllers.js';

const postRouter = Router();
postRouter.get("/timeline", timeline);
postRouter.post("/timeline");

export default postRouter;