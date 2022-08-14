import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { FixerController } from './fixer.controller';
import { HttpModule } from '@nestjs/axios';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 3600,
    }),
  ],
  controllers: [FixerController],
  providers: [
    FixerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class FixerModule {}
