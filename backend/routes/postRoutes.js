import express from "express";

import protect
from "../middleware/authMiddleware.js";

import {
  createPost,
  getPosts,
  likePost
}
from "../controllers/postController.js";

const router =
  express.Router();

router.post(
  "/create",
  protect,
  createPost
);

router.get(
  "/all",
  getPosts
);
router.put(
  "/like/:id",
  protect,
  likePost
);
export default router;