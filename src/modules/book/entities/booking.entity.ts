import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Hotel } from './../../hotel/entities/hotel.entity';

@ObjectType()
@Entity()
export class Booking {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  start_date: Date;

  @Field()
  @Column()
  end_date: Date;

  @Field()
  @Column({ default: false })
  is_checked_in: boolean;

  @Field()
  @Column()
  price: number;

  @ManyToOne(() => Hotel, { eager: true })
  hotel: Hotel;
}
