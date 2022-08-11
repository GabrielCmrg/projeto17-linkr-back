import express from 'express';

import { postMiddlewares, authMiddlewares } from '../middlewares/index.js';
import { postsController } from '../controllers/index.js';

const postsRouter = express.Router();

postsRouter.get(
  '/timeline',
  authMiddlewares.tokenValidation,
  postsController.timeline
);
postsRouter.post(
  '/timeline',
  authMiddlewares.tokenValidation,
  postMiddlewares.checkSendPostBody,
  postsController.sendPost
);

export default postsRouter;
