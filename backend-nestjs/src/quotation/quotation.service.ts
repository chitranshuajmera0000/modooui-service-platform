import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuotationService {
  constructor(private prisma: PrismaService) {}

  async createQuotationRequest(userId: string, data: any) {
    const { serviceId, description, budget, location } = data;

    if (!serviceId || !description || !location) {
      throw new BadRequestException('Service ID, description, and location are required');
    }

    const quotationRequest = await this.prisma.quotationRequest.create({
      data: {
        userId,
        serviceId,
        description,
        budget: budget || null,
        location,
        status: 'PENDING',
      },
      include: {
        service: {
          select: {
            name: true,
            category: true,
            provider: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return {
      message: 'Quotation request created successfully',
      request: quotationRequest,
    };
  }

  async getReceivedQuotations(userId: string) {
    const quotations = await this.prisma.quotation.findMany({
      where: {
        request: {
          userId: userId,
        },
      },
      include: {
        provider: {
          select: {
            id: true,
            name: true,
            email: true,
            profileImage: true,
          },
        },
        request: {
          select: {
            description: true,
            location: true,
            service: {
              select: {
                name: true,
                category: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { quotations };
  }

  async getSentQuotations(userId: string) {
    const quotations = await this.prisma.quotation.findMany({
      where: {
        providerId: userId,
      },
      include: {
        request: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
            service: {
              select: {
                name: true,
                category: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { quotations };
  }

  async respondToQuotationRequest(providerId: string, data: any) {
    const { requestId, price, description, estimatedDuration } = data;

    if (!requestId || !price || !description) {
      throw new BadRequestException('Request ID, price, and description are required');
    }

    const request = await this.prisma.quotationRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      throw new NotFoundException('Quotation request not found');
    }

    if (request.status !== 'PENDING') {
      throw new BadRequestException('Request is no longer pending');
    }

    const quotation = await this.prisma.quotation.create({
      data: {
        requestId,
        providerId,
        price,
        description,
        estimatedDuration: estimatedDuration || null,
        status: 'SENT',
      },
      include: {
        request: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    await this.prisma.quotationRequest.update({
      where: { id: requestId },
      data: { status: 'RESPONDED' },
    });

    return {
      message: 'Quotation sent successfully',
      quotation,
    };
  }
}