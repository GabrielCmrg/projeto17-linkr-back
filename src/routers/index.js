import express from 'express';

import authRouter from './authRouter.js';
import postsRouter from './postsRouter.js';
import hashtagsRouter from './hashtagsRouter.js';

const router = express.Router();

router.use(authRouter);
router.use(postsRouter);
router.use(hashtagsRouter);

export default router;
