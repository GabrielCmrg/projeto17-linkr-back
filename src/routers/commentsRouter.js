import express from 'express';

import { authMiddlewares } from '../middlewares/index.js';
import { commentsController } from '../controllers/index.js';

const commentsRouter = express.Router();

commentsRouter.get(
  '/comments/post/:postId',
  authMiddlewares.tokenValidation,
  commentsController.getPostComments
);

export default commentsRouter;
