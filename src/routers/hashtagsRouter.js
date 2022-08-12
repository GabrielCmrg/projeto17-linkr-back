import express from 'express';

import { hashtagsController } from '../controllers/index.js';

const hashtagsRouter = express.Router();

hashtagsRouter.get('/hashtags', hashtagsController.getAllTagsMentioned);

export default hashtagsRouter;
