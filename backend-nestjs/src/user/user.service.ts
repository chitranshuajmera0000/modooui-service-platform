import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
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
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return { user };
  }

  async updateProfile(userId: string, updateData: any) {
    const { name, phone, location, bio, profileImage } = updateData;

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }),
        ...(phone && { phone }),
        ...(location && { location }),
        ...(bio && { bio }),
        ...(profileImage && { profileImage }),
      },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        location: true,
        profileImage: true,
        bio: true,
        isServiceProvider: true,
      },
    });

    return {
      message: 'Profile updated successfully',
      user: updatedUser,
    };
  }
}