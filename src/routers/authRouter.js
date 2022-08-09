import express from 'express';

import { authMiddlewares } from '../middlewares/index.js';
import { usersController } from '../controllers/index.js';

const authRouter = express.Router();

authRouter.post(
  '/sign-up',
  authMiddlewares.checkSignupBody,
  usersController.registerNewUser
);

export default authRouter;
