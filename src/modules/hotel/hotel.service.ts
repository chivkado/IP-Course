// src/modules/hotel/hotel.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';
import { CreateHotelInput } from './dto/create-hotel.input';
import { UpdateHotelInput } from './dto/update-hotel.input';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private hotelRepo: Repository<Hotel>,
  ) {}

  create(data: CreateHotelInput): Promise<Hotel> {
    const hotel = this.hotelRepo.create(data);
    return this.hotelRepo.save(hotel);
  }

  findAll(): Promise<Hotel[]> {
    return this.hotelRepo.find();
  }

  findOne(id: number): Promise<Hotel | null> {
    return this.hotelRepo.findOneBy({ id });
  }

  async update(data: UpdateHotelInput): Promise<Hotel | null> {
    await this.hotelRepo.update(data.id, data);
    return this.findOne(data.id);
  }

  async remove(id: number): Promise<boolean | null> {
    const result = await this.hotelRepo.delete(id);
    return !!result.affected && result.affected > 0;
  }
}
