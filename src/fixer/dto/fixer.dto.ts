import { Field } from '@nestjs/graphql';
import { currencyTypes, symbolTypes } from '../../common/enum/enum';

export class FixerDto {
  @Field(() => currencyTypes)
  base: string;
  @Field(() => symbolTypes)
  symbols: string;
}
