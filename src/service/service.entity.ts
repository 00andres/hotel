import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from 'src/reservation/reservation.entity';

@ObjectType()
@Entity()
export class Service {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  nombre: string; 

  @Field()
  @Column()
  descripcion: string; 

  @Field(type => Int)
  @Column('decimal')
  costoAdicional: number; 

  @Field()
  @Column()
  disponible: boolean; 

  @OneToMany(() => Reservation, (reservation) => reservation.service)
  reservations: Reservation[];
}
