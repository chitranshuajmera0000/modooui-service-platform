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

  @Get('test')
  async testEndpoint(@Request() req) {
    return {
      message: 'Quotation endpoint working',
      user: req.user,
      timestamp: new Date().toISOString()
    };
  }

  @Post('request-debug')
  @HttpCode(HttpStatus.CREATED)
  async createQuotationRequestDebug(@Request() req, @Body() body) {
    try {
      console.log('DEBUG - Request body:', body);
      console.log('DEBUG - Headers:', req.headers);
      
      // For testing, use a hardcoded user ID
      const testUserId = 'test-user-id';
      
      const result = await this.quotationService.createQuotationRequest(testUserId, body);
      console.log('DEBUG - Success:', result);
      return result;
    } catch (error) {
      console.error('DEBUG - Error:', error.message, error.stack);
      throw error;
    }
  }

  @Post('request')
  @HttpCode(HttpStatus.CREATED)
  async createQuotationRequest(@Request() req, @Body() body) {
    try {
      console.log('Creating quotation request:', {
        userId: req.user?.userId,
        body
      });
      
      if (!req.user?.userId) {
        throw new Error('User not authenticated');
      }
      
      return await this.quotationService.createQuotationRequest(req.user.userId, body);
    } catch (error) {
      console.error('Error creating quotation request:', error);
      throw error;
    }
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
  @UseGuards(JwtAuthGuard)
  async respondToQuotationRequest(@Request() req, @Body() body) {
    return this.quotationService.respondToQuotationRequest(req.user.userId, body);
  }
}
