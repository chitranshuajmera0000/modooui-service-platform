import { Injectable, UnauthorizedException, ConflictException, NotFoundException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto } from '../common/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, name, phone, userType } = registerDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone: phone || null,
        isServiceProvider: userType === 'provider',
      },
    });

    const { access_token, refresh_token } = await this.generateTokens(user);

    return {
      message: 'User registered successfully',
      access_token,
      refresh_token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        isServiceProvider: user.isServiceProvider,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { access_token, refresh_token } = await this.generateTokens(user);

    return {
      message: 'Login successful',
      access_token,
      refresh_token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        isServiceProvider: user.isServiceProvider,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };
  }

  async logout(userId: string) {
    // In a real app, you'd invalidate the refresh token here
    // For now, we'll just return a success message
    return {
      message: 'Logout successful',
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const { access_token } = await this.generateTokens(user);

      return {
        access_token,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async forgotPassword(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Don't reveal if user exists or not
      return {
        message: 'If an account with that email exists, we sent you a reset link',
      };
    }

    // TODO: Implement email sending logic
    // For now, just return success message
    return {
      message: 'If an account with that email exists, we sent you a reset link',
    };
  }

  async resetPassword(token: string, newPassword: string) {
    // TODO: Implement proper password reset logic
    // For now, just return error
    throw new BadRequestException('Password reset not implemented yet');
  }

  async verifyEmail(token: string) {
    // TODO: Implement email verification logic
    // For now, just return success
    return {
      message: 'Email verified successfully',
    };
  }

  async getCurrentUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        isServiceProvider: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  private async generateTokens(user: any) {
    const payload = { sub: user.id, email: user.email };
    
    const access_token = this.jwtService.sign(payload, {
      expiresIn: '15m', // Access token expires in 15 minutes
    });

    const refresh_token = this.jwtService.sign(payload, {
      expiresIn: '7d', // Refresh token expires in 7 days
    });

    return { access_token, refresh_token };
  }
}