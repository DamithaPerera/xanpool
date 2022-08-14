import { Controller, Get, Query } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { currencyTypes, symbolTypes } from '../common/enum/enum';
import { SuccessDto } from '../common/helpers/responses/response-dto';
import {
  DESCRIPTION_MESSAGE,
  SUCCESS_MESSAGES,
} from '../common/constants/messages';

@Controller('/v1/fixer')
export class FixerController {
  constructor(private readonly fixerService: FixerService) {}

  @Get()
  @ApiQuery({
    name: 'base',
    enum: currencyTypes,
    description: DESCRIPTION_MESSAGE.SYMBOLS.message,
    type: String,
  })
  @ApiQuery({
    name: 'symbols',
    enum: symbolTypes,
    isArray: true,
    description: DESCRIPTION_MESSAGE.SYMBOLS.message,
    type: String,
  })
  @ApiOperation({
    summary: DESCRIPTION_MESSAGE.SUMMARY.message,
  })
  async getFixer(
    @Query('base') base: string,
    @Query('symbols') symbols: string,
  ) {
    const data = await this.fixerService.getExchangeRate(base, symbols);
    return new SuccessDto(SUCCESS_MESSAGES.EXCHANGE_RATES, data);
  }
}
