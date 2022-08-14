import { Controller, Get } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { CreateFixerDto } from './dto/create-fixer.dto';
import { UpdateFixerDto } from './dto/update-fixer.dto';

@Controller('fixer')
export class FixerController {
  constructor(private readonly fixerService: FixerService) {}

  @Get()
  async findAll() {
    return this.fixerService.findAll();
  }
}
