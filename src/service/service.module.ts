import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { ServiceService } from './service.service';
import { ServiceResolver } from './service.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Service])], 
  providers: [ServiceService, ServiceResolver],
  exports: [TypeOrmModule.forFeature([Service])]  
})
export class ServiceModule {}
