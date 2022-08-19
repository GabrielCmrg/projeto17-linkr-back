import express from 'express';

import { authMiddlewares, commentsMiddlewares } from '../middlewares/index.js';
import { commentsController } from '../controllers/index.js';

const commentsRouter = express.Router();

commentsRouter.get(
  '/comments',
  authMiddlewares.tokenValidation,
  commentsController.getPostComments
);
commentsRouter.post(
  '/comments',
  authMiddlewares.tokenValidation,
  commentsMiddlewares.checkCommentBody,
  commentsController.makeComment
);

export default commentsRouter;
