import express from 'express';

import authRouter from './authRouter.js';
import postsRouter from './postsRouter.js';

const router = express.Router();

router.use(authRouter);
router.use(postsRouter);


export default router;
