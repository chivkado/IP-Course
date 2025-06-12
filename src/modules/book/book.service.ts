import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { Hotel } from './../hotel/entities/hotel.entity';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepo: Repository<Booking>,

    @InjectRepository(Hotel)
    private hotelRepo: Repository<Hotel>,
  ) {}

  async create(input: CreateBookingInput): Promise<Booking> {
    const hotel = await this.hotelRepo.findOneBy({ id: input.hotelId });
    if (!hotel) throw new Error('Hotel not found');

    const booking = this.bookingRepo.create({
      ...input,
      hotel,
    });
    return this.bookingRepo.save(booking);
  }

  async update(input: UpdateBookingInput): Promise<Booking> {
    await this.bookingRepo.update(input.id, input);
    const updated = await this.bookingRepo.findOne({ where: { id: input.id } });
    if (!updated) throw new Error('Booking not found');
    return updated;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.bookingRepo.delete(id);
    return !!result.affected;
  }

  findBetweenDates(start: Date, end: Date): Promise<Booking[]> {
    return this.bookingRepo
      .createQueryBuilder('booking')
      .where('booking.start_date >= :start', { start })
      .andWhere('booking.end_date <= :end', { end })
      .getMany();
  }
}
