import express from 'express';

import { usersController } from '../controllers/index.js';
import { authMiddlewares } from '../middlewares/index.js'

const userRouter = express.Router();

userRouter.post(
  '/searchuser',
  usersController.getUsersByName
);

userRouter.post(
  '/followuser',
  authMiddlewares.tokenValidation,
  usersController.followUser,
);

userRouter.delete(
  '/unfollowuser/:id',
  authMiddlewares.tokenValidation,
  usersController.unfollowUser,
);

export default userRouter;