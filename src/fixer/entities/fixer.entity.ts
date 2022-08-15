import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Fixer {
  @Field()
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}
