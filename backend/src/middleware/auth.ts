import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/prisma";
import { verifyToken } from "../utils/jwt";

const prisma = new PrismaClient

interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        email: string;
    }
}


export const authenticateToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Access Token Required' });
        }

        const decoded = verifyToken(token);

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId }
        })

        if (!user) {
            return res.status(401).json({ error: 'User Not Found' });
        }

        req.user = { id: decoded.userId, email: decoded.email }
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid or Expired Token' })
    }
};

export { AuthenticatedRequest };