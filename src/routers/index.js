import express from 'express';

import authRouter from './authRouter.js';
import postRouter from './postsRouter.js';

const router = express.Router();

router.use(authRouter);
router.use(postRouter);

export default router;
