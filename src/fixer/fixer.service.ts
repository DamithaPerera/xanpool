import {
  BadRequestException,
  CACHE_MANAGER,
  Inject,
  Injectable,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ErrorDto } from '../common/helpers/responses/response-dto';
import { ERROR_MESSAGE } from '../common/constants/messages';
import { Cache } from 'cache-manager';

@Injectable()
export class FixerService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly httpService: HttpService,
  ) {}

  async getExchangeRate(base, symbols) {
    let value: {
      base: string;
      rates: string;
    };
    value = await this.cacheManager.get('name');

    if (value) {
      if (
        value.base === base &&
        (value.rates === symbols ||
          value.rates.hasOwnProperty(symbols[0]) ||
          value.rates.hasOwnProperty(symbols[1]) ||
          (value.rates.hasOwnProperty(symbols[0]) &&
            value.rates.hasOwnProperty(symbols[1])))
      ) {
        return value;
      } else {
        return this.fixerCall(base, symbols);
      }
    } else {
      return this.fixerCall(base, symbols);
    }
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
      delete response.data.success;
      delete response.data.timestamp;
      // const response = {
      //   data: {
      //     base: 'USD',
      //     date: '2022-08-15',
      //     rates: {
      //       HKD: 7.83595,
      //       USD: 7.83595,
      //     },
      //   },
      // };
      await this.cacheManager.set('name', response.data, { ttl: 3600 });
      return response.data;
    } catch (error) {
      console.log('error', error);
      throw new BadRequestException(new ErrorDto(ERROR_MESSAGE.AXIOS_ERROR));
    }
  }
}
