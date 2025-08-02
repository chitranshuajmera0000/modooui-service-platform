import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async createService(providerId: string, data: any) {
    const { name, description, category, price, duration } = data;

    if (!name || !description || !category) {
      throw new BadRequestException('Name, description, and category are required');
    }

    const service = await this.prisma.service.create({
      data: {
        name,
        description,
        category,
        basePrice: price || 0,
        providerId,
      },
      include: {
        provider: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return {
      message: 'Service created successfully',
      service,
    };
  }

  async getAllServices(category?: string) {
    const where = category ? { category } : {};

    const services = await this.prisma.service.findMany({
      where,
      include: {
        provider: {
          select: {
            id: true,
            name: true,
            email: true,
            profileImage: true,
          },
        },
        _count: {
          select: {
            quotationRequests: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { services };
  }

  async getServiceById(id: string) {
    const service = await this.prisma.service.findUnique({
      where: { id },
      include: {
        provider: {
          select: {
            id: true,
            name: true,
            email: true,
            profileImage: true,
            bio: true,
          },
        },
        quotationRequests: {
          take: 5,
          orderBy: {
            requestedAt: 'desc',
          },
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return { service };
  }

  async updateService(serviceId: string, providerId: string, data: any) {
    const service = await this.prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    if (service.providerId !== providerId) {
      throw new ForbiddenException('You can only update your own services');
    }

    const updatedService = await this.prisma.service.update({
      where: { id: serviceId },
      data,
      include: {
        provider: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return {
      message: 'Service updated successfully',
      service: updatedService,
    };
  }

  async deleteService(serviceId: string, providerId: string) {
    const service = await this.prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    if (service.providerId !== providerId) {
      throw new ForbiddenException('You can only delete your own services');
    }

    await this.prisma.service.delete({
      where: { id: serviceId },
    });

    return {
      message: 'Service deleted successfully',
    };
  }

  async getMyServices(providerId: string) {
    const services = await this.prisma.service.findMany({
      where: { providerId },
      include: {
        _count: {
          select: {
            quotationRequests: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { services };
  }
}
