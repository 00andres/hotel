import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habitation } from './habitation.entity';
import { HabitationService } from './habitation.service';
import { HabitationResolver } from './habitation.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Habitation]), 
  ],
  providers: [HabitationService, HabitationResolver],
  exports: [TypeOrmModule.forFeature([Habitation])], 
})
export class HabitationModule {}
