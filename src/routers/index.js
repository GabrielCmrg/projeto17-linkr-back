import express from 'express';

import authRouter from './authRouter.js';
<<<<<<< HEAD
import postsRouter from './postsRouter.js';
=======
import postRouter from './postRouters.js';
>>>>>>> teste

const router = express.Router();

router.use(authRouter);
<<<<<<< HEAD
router.use(postsRouter);
=======
router.use(postRouter);
>>>>>>> teste

export default router;
