import { Router } from "express";
import { authenticateToken } from "../middleware/auth";
import { createQuotationRequest, getReceivedQuotations, getSentQuotations, respondToQuotationRequest } from "../controllers/quotationController";

const router = Router()

router.post('/request', authenticateToken, createQuotationRequest);
router.get('/received', authenticateToken, getReceivedQuotations);
router.get('/sent', authenticateToken, getSentQuotations);
router.post('/respond', authenticateToken, respondToQuotationRequest);

export default router;