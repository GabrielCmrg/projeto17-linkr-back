import express from 'express';

import { postMiddlewares } from '../middlewares/index.js';
import { postsController } from '../controllers/index.js';

const postsRouter = express.Router();

postsRouter.get('/timeline', postsController.timeline);
postsRouter.post(
  '/timeline',
  postMiddlewares.checkSendPostBody,
  postsController.sendPost
);

export default postsRouter;
