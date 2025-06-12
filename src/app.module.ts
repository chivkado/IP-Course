import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { Hotel } from './modules/hotel/entities/hotel.entity';
import { Booking } from './modules/book/entities/booking.entity';

import { HotelModule } from './modules/hotel/hotel.module';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true, // ✅ Enable GraphQL Playground
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // ✅ Auto-generate schema
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Hotel, Booking],
      synchronize: true,
    }),
    HotelModule,
    BookModule,
  ],
})
export class AppModule {}
