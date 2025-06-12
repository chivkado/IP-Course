import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateBookingInput {
  @Field()
  start_date: Date;

  @Field()
  end_date: Date;

  @Field(() => Int)
  hotelId: number;

  @Field()
  price: number;
}
