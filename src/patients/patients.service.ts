import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientEntity } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly patientRepository: Repository<Patient>
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const newPatient = this.patientRepository.create(createPatientDto);
    return await this.patientRepository.save(newPatient);
  }

  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.find();
  }

  async findOne(id: number): Promise<Patient> {
    const patient = await this.patientRepository.findOne({ where: { id } });
    if (!patient) {
      throw new Error(`Patient with ID ${id} not found`);
    }
    return patient;
  }

  async update(
    id: number,
    updatePatientDto: UpdatePatientDto
  ): Promise<Patient> {
    const patient = await this.patientRepository.preload({
      id,
      ...updatePatientDto,
    });
    if (!patient) {
      throw new Error(`Patient with ID ${id} not found`);
    }
    return await this.patientRepository.save(patient);
  }

  async remove(id: number): Promise<void> {
    const patient = await this.patientRepository.findOne({ where: { id } });
    if (!patient) {
      throw new Error(`Patient with ID ${id} not found`);
    }
    await this.patientRepository.remove(patient);
  }
}
