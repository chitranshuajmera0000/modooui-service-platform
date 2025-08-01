import { Router } from "express";
import { createService, getServices, getServicesByCategory } from "../controllers/serviceController";
import { authenticateToken } from "../middleware/auth";

const router = Router()

router.get('/', getServices)
router.get('/category/:category', getServicesByCategory);

router.post('/', authenticateToken, createService);

export default router;