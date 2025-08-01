import { Router } from "express";
import { authenticateToken } from "../middleware/auth";
import { getProfile, updateProfile } from "../controllers/userControllers";

const router = Router();

router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);

export default router;