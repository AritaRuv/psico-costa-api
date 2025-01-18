import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AppointmentEntity } from './entities/appointment.entity';
import { Repository } from 'typeorm';
import { PatientEntity } from 'src/patients/entities/patient.entity';
import { ProfessionalEntity } from 'src/professionals/entities/professional.entity';
import { OfficeEntity } from 'src/office/entities/office.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(AppointmentEntity)
    private readonly appointmentRepository: Repository<AppointmentEntity>
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {

    const newAppointmentEntity = new AppointmentEntity(); 
    newAppointmentEntity.date = new  Date(createAppointmentDto.date);
    newAppointmentEntity.patient = { id: createAppointmentDto.patient } as PatientEntity;
    newAppointmentEntity.professional = { id: createAppointmentDto.professional } as ProfessionalEntity;
    newAppointmentEntity.office = { id: createAppointmentDto.office } as OfficeEntity;

    return await this.appointmentRepository.save(newAppointmentEntity);
  }


  async findAll(): Promise<Appointment[]> {
    return await this.appointmentRepository.find({
      relations: ['professional', 'patient', 'office'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
