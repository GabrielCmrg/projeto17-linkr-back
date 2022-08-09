import { Router } from "express";
import postRouter from "./postRouters.js";


const router = Router();
router.use(postRouter)


export default router;