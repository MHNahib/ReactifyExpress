import { Router } from "express";
import { getAllPostsController } from "../v1/controllers/posts.controllers.js";

const router = Router();

router.get("/posts", getAllPostsController);

export default router;
