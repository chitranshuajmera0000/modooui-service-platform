import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { QuotationService } from './quotation.service';

@Controller('quotations')
@UseGuards(JwtAuthGuard)
export class QuotationController {
  constructor(private readonly quotationService: QuotationService) {}

  @Post('request')
  @HttpCode(HttpStatus.CREATED)
  async createQuotationRequest(@Request() req, @Body() body) {
    return this.quotationService.createQuotationRequest(req.user.userId, body);
  }

  @Get('received')
  async getReceivedQuotations(@Request() req) {
    return this.quotationService.getReceivedQuotations(req.user.userId);
  }

  @Get('sent')
  async getSentQuotations(@Request() req) {
    return this.quotationService.getSentQuotations(req.user.userId);
  }

  @Post('respond')
  @HttpCode(HttpStatus.CREATED)
  async respondToQuotationRequest(@Request() req, @Body() body) {
    return this.quotationService.respondToQuotationRequest(req.user.userId, body);
  }
}
