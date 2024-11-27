import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habitation } from './habitation.entity';
import { CreateHabitationDto } from './habitation.dto';
import { UpdateHabitationDto } from './update-habitation.dto';

@Injectable()
export class HabitationService {
  constructor(
    @InjectRepository(Habitation)
    private habitationRepository: Repository<Habitation>,
  ) {}

  create(data: CreateHabitationDto): Promise<Habitation> {
    const habitation = this.habitationRepository.create(data);
    return this.habitationRepository.save(habitation);
  }

  update(id: number, data: UpdateHabitationDto): Promise<Habitation> {
    return this.habitationRepository.save({ ...data, id });
  }

  findAll(): Promise<Habitation[]> {
    return this.habitationRepository.find();
  }

  findOne(id: number): Promise<Habitation> {
    return this.habitationRepository.findOne({ where: { id } });
  }

  remove(id: number): Promise<void> {
    return this.habitationRepository.delete(id).then(() => undefined);
  }
}
