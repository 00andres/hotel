import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';
import { CreateServiceDto } from './service.dto';
import { UpdateServiceDto } from './update-service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  create(data: CreateServiceDto): Promise<Service> {
    const service = this.serviceRepository.create(data);
    return this.serviceRepository.save(service);
  }

  update(id: number, data: UpdateServiceDto): Promise<Service> {
    return this.serviceRepository.save({ ...data, id });
  }

  findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  findOne(id: number): Promise<Service> {
    return this.serviceRepository.findOne({ where: { id } });
  }

  remove(id: number): Promise<void> {
    return this.serviceRepository.delete(id).then(() => undefined);
  }
}
