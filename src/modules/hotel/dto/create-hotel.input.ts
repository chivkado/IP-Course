// src/modules/hotel/dto/create-hotel.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phone: string;
}
