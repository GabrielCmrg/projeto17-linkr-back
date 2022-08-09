import { Router } from "express";
import postRouter from "./postRouters";


const router = Router();
router.use(postRouter)


export default router;