import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HabitationService } from './habitation.service';
import { Habitation } from './habitation.entity';
import { CreateHabitationDto } from './habitation.dto';
import { UpdateHabitationDto } from './update-habitation.dto';

@Resolver(() => Habitation)
export class HabitationResolver {
  constructor(private readonly habitationService: HabitationService) {}

  @Query(() => [Habitation])
  getAllHabitaciones() { 
    return this.habitationService.findAll();
  }

  @Query(() => Habitation)
  getHabitacion(@Args('id') id: number) { 
    return this.habitationService.findOne(id);
  }

  @Mutation(() => Habitation)
  createHabitacion(@Args('data') data: CreateHabitationDto) { 
    return this.habitationService.create(data);
  }

  @Mutation(() => Habitation)
  updateHabitacion(
    @Args('id') id: number,
    @Args('data') data: UpdateHabitationDto,
  ) {
    return this.habitationService.update(id, data);
  }

  @Mutation(() => Boolean)
  deleteHabitacion(@Args('id') id: number) { 
    return this.habitationService.remove(id).then(() => true);
  }
}
