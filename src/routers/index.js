import express from 'express';

import authRouter from './authRouter.js';
import postsRouter from './postsRouter.js';
import hashtagsRouter from './hashtagsRouter.js';
import userRouter from './userRouter.js';

const router = express.Router();

router.use(authRouter);
router.use(postsRouter);
router.use(hashtagsRouter);
router.use(userRouter);

export default router;
