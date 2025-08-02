import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ServiceService } from './service.service';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async createService(@Request() req, @Body() body) {
    return this.serviceService.createService(req.user.userId, body);
  }

  @Get()
  async getAllServices(@Query('category') category?: string) {
    return this.serviceService.getAllServices(category);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  async getMyServices(@Request() req) {
    return this.serviceService.getMyServices(req.user.userId);
  }

  @Get(':id')
  async getServiceById(@Param('id') id: string) {
    return this.serviceService.getServiceById(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateService(@Param('id') id: string, @Request() req, @Body() body) {
    return this.serviceService.updateService(id, req.user.userId, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteService(@Param('id') id: string, @Request() req) {
    return this.serviceService.deleteService(id, req.user.userId);
  }
}
