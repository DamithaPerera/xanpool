import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ErrorDto } from '../common/helpers/responses/response-dto';
import { ERROR_MESSAGE } from '../common/constants/messages';

@Injectable()
export class FixerService {
  constructor(private readonly httpService: HttpService) {}

  async getExchangeRate(base, symbols) {
    console.log('base', base, 'symbols', base);
    return this.fixerCall(base, symbols);
  }

  async fixerCall(base, symbols) {
    try {
      const response = await this.httpService.axiosRef.get(
        `https://api.apilayer.com/fixer/latest?symbols=${symbols}&base=${base}`,
        {
          headers: {
            apikey: 'lFlDaqvaHw6ZWOlKoHDk7smdhuwpdZqI',
          },
        },
      );
      console.log(response.data);
      delete response.data.success;
      delete response.data.timestamp;
      return response.data;
    } catch (error) {
      console.log('error', error);
      throw new BadRequestException(new ErrorDto(ERROR_MESSAGE.AXIOS_ERROR));
    }
  }
}
