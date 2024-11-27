import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Habitation } from '../habitation/habitation.entity';
import { Service } from '../service/service.entity';

@ObjectType()
@Entity()
export class Reservation {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  clientId: number;

  @Field()
  @Column()
  startDate: Date;

  @Field()
  @Column()
  endDate: Date;

  @Field()
  @Column()
  status: string;

  // Relación con Habitation 
  @Field(() => Habitation) 
  @ManyToOne(() => Habitation, (habitation) => habitation.reservations)
  habitation: Habitation;

  // Relación con Service 
  @Field(() => Service, { nullable: true })  
  @ManyToOne(() => Service, (service) => service.reservations, { nullable: true })
  service?: Service;
}
