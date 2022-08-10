import express from "express";

import { postMiddlewares } from "../middlewares/index.js";
import { postControllers } from "../controllers/index.js";
const postRouter = express.Router();

postRouter.get("/timeline", postControllers.timeline);
postRouter.post("/timeline",postMiddlewares.checkSendPostBody,postControllers.sendPost);

export default postRouter;