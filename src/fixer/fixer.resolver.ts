import { Query, Resolver } from '@nestjs/graphql';
import { FixerService } from './fixer.service';
import { Fixer } from './entities/fixer.entity';

@Resolver(() => Fixer)
export class FixerResolver {
  constructor(private fixerService: FixerService) {}

  @Query(() => [Fixer], { name: 'getAllProjects' })
  findAll() {
    console.log('dd');
    return this.fixerService.getExchangeRate('USD', 'USD');
  }
}
