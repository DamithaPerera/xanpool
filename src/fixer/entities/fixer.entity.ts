import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

@ObjectType()
export class Fixer {
  @Field()
  base: string;

  @Field()
  date: string;

  @Field(() => GraphQLJSONObject)
  rates: object;
}
