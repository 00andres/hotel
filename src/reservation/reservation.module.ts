import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { ReservationService } from './reservation.service';
import { ReservationResolver } from './reservation.resolver';
import { HabitationModule } from '../habitation/habitation.module';
import { ServiceModule } from '../service/service.module';  

@Module({
  imports: [
    TypeOrmModule.forFeature([Reservation]),  
    HabitationModule, 
    ServiceModule,     
  ],
  providers: [ReservationService, ReservationResolver],
})
export class ReservationModule {}
