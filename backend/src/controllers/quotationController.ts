import { PrismaClient } from "../generated/prisma"
import { AuthenticatedRequest, authenticateToken } from "../middleware/auth"
import { Request, response, Response } from "express"

const prisma = new PrismaClient;

export const createQuotationRequest = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user?.id;

        const { serviceId, description, budget, location } = req.body;

        if (!serviceId || !description || !location) {
            return res.status(400).json({ error: 'Service ID , Description , and Location are required' });
        }

        const quotationRequest = await prisma.quotationRequest.create({
            data: {
                userId: userId!,
                serviceId,
                description,
                budget: budget || null,
                location,
                status: 'PENDING'
            },
            include: {
                service: {
                    select: {
                        name: true,
                        category: true,
                        provider: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        })
        res.status(201).json({
            message: 'Quotation request created successfully',
            request: quotationRequest
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error ' });
    }
}


export const getReceivedQuotations = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user?.id;

        const quotations = await prisma.quotation.findMany({
            where: {
                request: {
                    userId: userId
                }
            },
            include: {
                provider: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        profileImage: true
                    }
                },
                request: {
                    select: {
                        description: true,
                        location: true,
                        service: {
                            select: {
                                name: true,
                                category: true
                            }
                        }
                    }
                },

            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error ' })
    }

}


export const getSentQuotations = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user?.id;

        const quotations = await prisma.quotation.findMany({
            where: {
                providerId: userId
            },
            include: {
                request: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                email: true
                            }
                        },
                        service: {
                            select: {
                                name: true,
                                category: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.json({ quotations });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error ' });
    }
}


export const respondToQuotationRequest = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const providerId = req.user?.id;
        const { requestId, price, description, estimatedDuration } = req.body;

        if (!requestId || !price || !description) {
            return res.status(400).json({ error: 'Request ID , price , and Description are Requires' });
        }

        const request = await prisma.quotationRequest.findUnique({
            where: {
                id: requestId
            }
        })

        if (!request) {
            return res.status(404).json({ error: 'Quotation request not found ' });
        }

        if (request.status !== 'PENDING') {
            return res.status(404).json({ error: 'Request is no longer Pending ' });
        }

        const quotation = await prisma.quotation.create({
            data: {
                requestId,
                providerId: providerId!,
                price,
                description,
                estimatedDuration,
                status: 'SENT'
            },
            include: {
                request: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        });

        await prisma.quotationRequest.update({
            where: { id: requestId },
            data: { status: 'RESPONDED' }
        })

        res.status(201).json({
            message: 'Quotation Sent Successfully ',
            quotation
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}