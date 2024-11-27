import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { CreateReservationDto } from './reservation.dto';
import { UpdateReservationDto } from './update-reservation.dto';
import { Habitation } from '../habitation/habitation.entity';
import { Service } from '../service/service.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    @InjectRepository(Habitation)
    private readonly habitationRepository: Repository<Habitation>,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find({
      relations: ['habitation', 'service'],
    });
  }

  async findOne(id: number): Promise<Reservation> {
    return this.reservationRepository.findOne({
      where: { id },
      relations: ['habitation', 'service'],
    });
  }

  async create(data: CreateReservationDto): Promise<Reservation> {
    // Buscar la habitación relacionada
    const habitation = await this.habitationRepository.findOne({
      where: { id: data.habitationId },
    });
    if (!habitation) {
      throw new Error('La habitación especificada no existe');
    }

    // Buscar el servicio relacionado si se proporciona
    let service: Service | undefined;
    if (data.serviceId) {
      service = await this.serviceRepository.findOne({
        where: { id: data.serviceId },
      });
      if (!service) {
        throw new Error('El servicio especificado no existe');
      }
    }

    // Crear la reserva con las entidades relacionadas
    const reservation = this.reservationRepository.create({
      ...data,
      habitation,
      service,
    });

    return this.reservationRepository.save(reservation);
  }

  async update(id: number, data: UpdateReservationDto): Promise<Reservation> {
    // Actualizar habitación si se proporciona
    let habitation: Habitation | undefined;
    if (data.habitationId) {
      habitation = await this.habitationRepository.findOne({
        where: { id: data.habitationId },
      });
      if (!habitation) {
        throw new Error('La habitación especificada no existe');
      }
    }

    // Actualizar servicio si se proporciona
    let service: Service | undefined;
    if (data.serviceId) {
      service = await this.serviceRepository.findOne({
        where: { id: data.serviceId },
      });
      if (!service) {
        throw new Error('El servicio especificado no existe');
      }
    }

    await this.reservationRepository.update(id, {
      ...data,
      habitation,
      service,
    });

    return this.reservationRepository.findOne({
      where: { id },
      relations: ['habitation', 'service'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }
}
