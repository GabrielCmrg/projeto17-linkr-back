import express from 'express';

import { usersController } from '../controllers/index.js';

const userRouter = express.Router();

userRouter.post(
  '/searchuser',
  usersController.getUsersByName
);

export default userRouter;