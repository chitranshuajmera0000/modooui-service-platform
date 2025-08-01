import { Request, Response } from "express"
import { AuthenticatedRequest } from "../middleware/auth"
import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient;


export const getServices = async (req: Request, res: Response) => {
    try {

        const services = await prisma.service.findMany({
            include: {
                provider: {
                    select: {
                        id: true,
                        name: true,
                        profileImage: true
                    }
                },
                _count: {
                    select: {
                        quotationRequests: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        res.json(services)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const getServicesByCategory = async (req: Request, res: Response) => {
    try {
        const { category } = req.params;

        const services = await prisma.service.findMany({
            where: {
                category: {
                    contains: category,
                    mode: 'insensitive'
                }
            },
            include: {
                provider: {
                    select: {
                        id: true,
                        name: true,
                        profileImage: true
                    }
                }
            }
        })
        res.status(200).json({ services })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createService = async (req: AuthenticatedRequest, res: Response) => {

    try {
        const providerId = req.user?.id;
        const { name, category, description, basePrice } = req.body;

        if (!name || !category || !description || !basePrice) {
            return res.status(400).json({
                error: 'Name , Category , Description and Base Price are Required'
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: providerId,
            }
        })

        if (!user?.isServiceProvider) {
            return res.status(403).json({ error: 'Only Service Providers can Create Services ' })
        }

        const service = await prisma.service.create({
            data: {
                name,
                category,
                description,
                basePrice,
                providerId: providerId!
            },
            include: {
                provider: {
                    select: {
                        name: true,
                        profileImage: true,
                        email: true,
                    }
                }
            }
        })
        res.status(200).json({
            message: 'Service Created Successfully',
            service
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }

}