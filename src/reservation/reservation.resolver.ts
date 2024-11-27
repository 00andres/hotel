import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation.entity';
import { CreateReservationDto } from './reservation.dto';
import { UpdateReservationDto } from './update-reservation.dto';

@Resolver(() => Reservation)
export class ReservationResolver {
  constructor(private readonly reservationService: ReservationService) {}

  @Query(() => [Reservation])
  async getAllReservations() {
    return this.reservationService.findAll(); 
  }

  @Query(() => Reservation)
  async getReservation(@Args('id') id: number) {
    return this.reservationService.findOne(id); 
  }

  @Mutation(() => Reservation)
  async createReservation(@Args('data') data: CreateReservationDto) {
    return this.reservationService.create(data);
  }

  @Mutation(() => Reservation)
  async updateReservation(
    @Args('id') id: number,
    @Args('data') data: UpdateReservationDto,
  ) {
    return this.reservationService.update(id, data); 
  }

  @Mutation(() => Boolean)
  async deleteReservation(@Args('id') id: number) {
    return this.reservationService.remove(id).then(() => true); 
  }
}
