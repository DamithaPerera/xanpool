import { Module } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { FixerController } from './fixer.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FixerController],
  providers: [FixerService],
})
export class FixerModule {}
