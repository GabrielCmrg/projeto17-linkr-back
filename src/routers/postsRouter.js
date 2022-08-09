import express from 'express';

import { postsMiddlewares } from '../middlewares/index.js';
import { postsController } from '../controllers/index.js';

const postsRouter = express.Router();

postsRouter.get(
    '/user/:id',
    // verificar token
    postsMiddlewares.checkReqParams,
    postsController.getUserPosts
  );

export default postsRouter;
