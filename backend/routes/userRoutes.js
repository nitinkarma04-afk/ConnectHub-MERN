import express from "express";
 
import protect
from "../middleware/authMiddleware.js";

import {
  followUser,
  getProfile,
  updateProfile,
}
from "../controllers/userController.js";

const router =
  express.Router();

router.put(
  "/follow/:id",
  protect,
  followUser
);
router.get(
  "/profile/:id",
  getProfile
);
router.put(
  "/update",
  protect,
  updateProfile
);

export default router;