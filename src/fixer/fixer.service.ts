import { Injectable } from '@nestjs/common';
import { CreateFixerDto } from './dto/create-fixer.dto';
import { UpdateFixerDto } from './dto/update-fixer.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class FixerService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(base, symbols) {
    try {
      const response = await this.httpService.axiosRef.get(
        'https://api.apilayer.com/fixer/convert?to=GBP&from=EUR&amount=100.00&date=2018-01-01',
        {
          headers: {
            apikey: 'lFlDaqvaHw6ZWOlKoHDk7smdhuwpdZqI',
          },
        },
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log('error', error);
      console.error(error);
      return error;
    }
  }
}
