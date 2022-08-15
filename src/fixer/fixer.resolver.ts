import { Args, Query, Resolver } from '@nestjs/graphql';
import { FixerService } from './fixer.service';
import { Fixer } from './entities/fixer.entity';

@Resolver(() => Fixer)
export class FixerResolver {
  constructor(private fixerService: FixerService) {}

  @Query(() => Fixer, { name: 'getFixer' })
  async findAll(
    @Args('base', { nullable: false }) base: string,
    @Args('symbols', { nullable: false }) symbols?: string,
  ) {
    return this.fixerService.getExchangeRate(base, symbols);
  }
}
