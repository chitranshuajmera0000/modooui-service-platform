import { PrismaClient } from "../generated/prisma";
import { AuthenticatedRequest } from "../middleware/auth";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export const getProfile = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user?.id;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                location: true,
                profileImage: true,
                bio: true,
                isServiceProvider: true,
                createdAt: true

            }
        })

        if (!user) {
            return res.status(404).json({ error: 'User not Found ' });
        }

        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



export const updateProfile = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user?.id;

        const { name, phone, location, bio, profileImage } = req.body;

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                ...(name && { name }),
                ...(phone && { phone }),
                ...(location && { location }),
                ...(bio && { bio }),
                ...(profileImage && { profileImage })
            },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                location: true,
                profileImage: true,
                bio: true,
                isServiceProvider: true
            }
        });

        res.json({
            message: 'Profile Updated Successfully',
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error ' });
    }
}

