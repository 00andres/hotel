import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServiceService } from './service.service';
import { Service } from './service.entity';
import { CreateServiceDto } from './service.dto';
import { UpdateServiceDto } from './update-service.dto';

@Resolver(() => Service)
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @Query(() => [Service])
  getAllServices() {
    return this.serviceService.findAll();
  }

  @Query(() => Service)
  getService(@Args('id') id: number) {
    return this.serviceService.findOne(id);
  }

  @Mutation(() => Service)
  createService(@Args('data') data: CreateServiceDto) {
    return this.serviceService.create(data);
  }

  @Mutation(() => Service)
  updateService(
    @Args('id') id: number,
    @Args('data') data: UpdateServiceDto,
  ) {
    return this.serviceService.update(id, data);
  }

  @Mutation(() => Boolean)
  deleteService(@Args('id') id: number) {
    return this.serviceService.remove(id).then(() => true);
  }
}
