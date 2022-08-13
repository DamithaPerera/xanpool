import { Injectable } from '@nestjs/common';
import { CreateFixerDto } from './dto/create-fixer.dto';
import { UpdateFixerDto } from './dto/update-fixer.dto';

@Injectable()
export class FixerService {
  create(createFixerDto: CreateFixerDto) {
    return 'This action adds a new fixer';
  }

  findAll() {
    return `This action returns all fixer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fixer`;
  }

  update(id: number, updateFixerDto: UpdateFixerDto) {
    return `This action updates a #${id} fixer`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixer`;
  }
}
