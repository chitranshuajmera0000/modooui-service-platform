import { Controller, Post, Body, ValidationPipe, Get, UseGuards, Req, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, ForgotPasswordDto, ResetPasswordDto, RefreshTokenDto } from '../common/dto/auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import type { Request } from 'express';

// Extend Express Request type to include user
interface AuthenticatedRequest extends Request {
  user: {
    sub: string;
    email: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body(ValidationPipe) registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body(ValidationPipe) loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req: AuthenticatedRequest) {
    return this.authService.logout(req.user.sub);
  }

  @Post('refresh')
  async refreshToken(@Body(ValidationPipe) refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshToken(refreshTokenDto.refresh_token);
  }

  @Post('forgot-password')
  async forgotPassword(@Body(ValidationPipe) forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @Post('reset-password')
  async resetPassword(@Body(ValidationPipe) resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto.token, resetPasswordDto.password);
  }

  @Post('verify-email/:token')
  async verifyEmail(@Param('token') token: string) {
    return this.authService.verifyEmail(token);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@Req() req: AuthenticatedRequest) {
    return this.authService.getCurrentUser(req.user.sub);
  }
}