import { Router } from "express";

const router = Router();

router.get('/health',(req,res)=> {
    res.status(200);
    res.json({
        status: 'OK',
        timestamp: new Date()
    })
})

export default router;