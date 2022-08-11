import express from 'express';

import { postMiddlewares } from '../middlewares/index.js';
import { tokenMiddlewares } from '../middlewares/index.js';
import { postsController } from '../controllers/index.js';

const postsRouter = express.Router();

postsRouter.get(
  '/timeline',
  tokenMiddlewares.tokenValidation,
  postsController.timeline
);
postsRouter.post(
  '/timeline',
  tokenMiddlewares.tokenValidation,
  postMiddlewares.checkSendPostBody,
  postsController.sendPost
);

export default postsRouter;
