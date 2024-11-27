import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from '../reservation/reservation.entity';

@ObjectType()
@Entity()
export class Habitation {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()  
  @Column()
  numero: number; 

  @Field()  
  @Column()
  tipo: string; 

  @Field(type => Int)  
  @Column()
  precio: number; 

  @Field()  
  @Column()
  disponible: boolean; 

  // Relación con Reservation
  @OneToMany(() => Reservation, (reservation) => reservation.habitation)
  reservations: Reservation[];
}
