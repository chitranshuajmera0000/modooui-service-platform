import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { User } from '../common/decorators/user.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  async getProfile(@User() user: any) {
    return this.userService.getProfile(user.userId);
  }

  @Put('profile')
  async updateProfile(@User() user: any, @Body() updateData: any) {
    return this.userService.updateProfile(user.userId, updateData);
  }
}