import express from 'express';

import { usersController } from '../controllers/index.js';
import { authMiddlewares, usersMiddlewares } from '../middlewares/index.js';

const userRouter = express.Router();

userRouter.post('/searchuser', usersController.getUsersByName);

userRouter.post(
  '/followuser/:id',
  authMiddlewares.tokenValidation,
  usersMiddlewares.checkFollowStatus,
  usersController.followUser
);

userRouter.delete(
  '/unfollowuser/:id',
  authMiddlewares.tokenValidation,
  usersMiddlewares.checkFollowStatus,
  usersController.unfollowUser
);

export default userRouter;
