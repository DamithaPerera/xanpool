import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixerModule } from './fixer/fixer.module';

@Module({
  imports: [FixerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
