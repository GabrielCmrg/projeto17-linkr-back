import { Router } from 'express';
import { timeline } from '../controllers/postControllers.js';
import { getPostsValidation } from '../middlewares/postsMiddlewareValidation.js';

const postRouter = Router();
postRouter.get("/timeline", getPostsValidation, timeline);

export default postRouter;