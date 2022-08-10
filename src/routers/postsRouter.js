import express from 'express';

import { postsMiddlewares } from '../middlewares/index.js';
import { postsController } from '../controllers/index.js';

const postsRouter = express.Router();

postsRouter.get('/timeline', postsController.timeline);
postsRouter.post(
  '/timeline',
  postsMiddlewares.checkSendPostBody,
  postsController.sendPost
);

export default postsRouter;
