import { Injectable } from '@nestjs/common';
import { CreateHealthInsuranceDto } from './dto/create-health-insurance.dto';
import { UpdateHealthInsuranceDto } from './dto/update-health-insurance.dto';
import { HealthInsuranceEntity } from './entities/health-insurance.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HealthInsuranceService {
  constructor(
    @InjectRepository(HealthInsuranceEntity)
    private readonly healthInsuranceRepository: Repository<HealthInsuranceEntity>
  ) {}
  
  async create(createHealthInsuranceDto: CreateHealthInsuranceDto): Promise<HealthInsurance> {
    const newHealthInsurance = this.healthInsuranceRepository.create(createHealthInsuranceDto);
    return await this.healthInsuranceRepository.save(newHealthInsurance);
  }

  async findAll(): Promise<HealthInsurance[]> {
    return await this.healthInsuranceRepository.find();
  }

  async findOne(id: number): Promise<HealthInsurance> {
    const healthInsurance = await this.healthInsuranceRepository.findOne({ where: { id } });
    if (!healthInsurance) {
      throw new Error(`Health Insurance with ID ${id} not found`);
    }
    return healthInsurance;
  }

  async update(
    id: number,
    updateHealthInsuranceDto: UpdateHealthInsuranceDto
  ): Promise<HealthInsurance> {
    const healthInsurance = await this.healthInsuranceRepository.preload({
      id,
      ...updateHealthInsuranceDto,
    });
    if (!healthInsurance) {
      throw new Error(`Health Insurance with ID ${id} not found`);
    }
    return await this.healthInsuranceRepository.save(healthInsurance);
  }

  async remove(id: number): Promise<void> {
    const healthInsurance = await this.healthInsuranceRepository.findOne({ where: { id } });
    if (!healthInsurance) {
      throw new Error(`Health Insurance with ID ${id} not found`);
    }
    await this.healthInsuranceRepository.remove(healthInsurance);
  }
}
