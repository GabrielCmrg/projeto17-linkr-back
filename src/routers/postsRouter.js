import express from 'express';

import { postsMiddlewares, authMiddlewares } from '../middlewares/index.js';
import { postsController } from '../controllers/index.js';

const postsRouter = express.Router();

postsRouter.get(
  '/user/:id',
  authMiddlewares.tokenValidation,
  postsMiddlewares.checkReqParams,
  postsController.getUserPosts
);

postsRouter.get(
  '/timeline',
  authMiddlewares.tokenValidation,
  postsController.getTimelinePosts
);

postsRouter.post(
  '/timeline',
  authMiddlewares.tokenValidation,
  postsMiddlewares.checkSendPostBody,
  postsController.sendPost
);

export default postsRouter;
