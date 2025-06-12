import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Booking } from './entities/booking.entity';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';

@Resolver(() => Booking)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Booking)
  bookHotel(@Args('input') input: CreateBookingInput) {
    return this.bookService.create(input);
  }

  @Mutation(() => Booking)
  updateBooking(@Args('input') input: UpdateBookingInput) {
    return this.bookService.update(input);
  }

  @Mutation(() => Boolean)
  cancelBooking(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }

  @Query(() => [Booking])
  bookingsBetweenDates(
    @Args('start') start: Date,
    @Args('end') end: Date,
  ) {
    return this.bookService.findBetweenDates(start, end);
  }
}
