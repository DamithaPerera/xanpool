import { Controller, Get, Query } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { currencyTypes, symbolTypes } from '../common/enum/enum';
import { SuccessDto } from '../common/helpers/responses/response-dto';
import { SUCCESS_MESSAGES } from '../common/constants/messages';

@Controller('/v1/fixer')
export class FixerController {
  constructor(private readonly fixerService: FixerService) {}

  @Get()
  @ApiQuery({
    name: 'base',
    enum: currencyTypes,
    description:
      'Enter the three-letter currency code of your preferred base currency',
    type: String,
  })
  @ApiQuery({
    name: 'symbols',
    enum: symbolTypes,
    isArray: true,
    description:
      'Enter a list of comma-separated currency codes to limit output currencies',
    type: String,
  })
  @ApiOperation({
    summary:
      'Returns real-time exchange rate data updated every 60 minutes, every 10 minutes or every 60 seconds.',
  })
  @ApiResponse({
    status: 200,
    description: ' Fetch currency values',
  })
  async getFixer(
    @Query('base') base: string,
    @Query('symbols') symbols: string,
  ) {
    const data = await this.fixerService.getExchangeRate(base, symbols);
    return new SuccessDto(SUCCESS_MESSAGES.EXCHANGE_RATES, data);
  }
}
