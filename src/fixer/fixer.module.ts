import { CacheModule, Module } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { FixerController } from './fixer.controller';
import { HttpModule } from '@nestjs/axios';
import { FixerResolver } from './fixer.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    HttpModule,
    CacheModule.register(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/fixer/graphql-schema.gql'),
    }),
  ],
  controllers: [FixerController],
  providers: [FixerService, FixerResolver],
})
export class FixerModule {}
