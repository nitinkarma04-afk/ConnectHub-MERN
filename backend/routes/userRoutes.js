import express from "express";
 
import protect
from "../middleware/authMiddleware.js";

import {
  followUser,
  getProfile,
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
 
export default router;