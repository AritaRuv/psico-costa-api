import { Injectable } from '@nestjs/common';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { Repository } from 'typeorm';
import { ProfessionalEntity } from './entities/professional.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfessionalsService {
  constructor(
    @InjectRepository(ProfessionalEntity)
    private readonly professionalsRepository: Repository<ProfessionalEntity>
  ) {}
  
  async create(createProfessionalDto: CreateProfessionalDto): Promise<Professional> {
    const newProfessional = this.professionalsRepository.create(createProfessionalDto);
    return await this.professionalsRepository.save(newProfessional);
  }

  async findAll(): Promise<Professional[]> {
    return await this.professionalsRepository.find({
      relations: ['office'],
    });
  }

  async findOne(id: number): Promise<Professional> {
    const professional = await this.professionalsRepository.findOne({ where: { id } });
    if (!professional) {
      throw new Error(`Professional with ID ${id} not found`);
    }
    return professional;
  }

  async update(
    id: number,
    updateProfessionalDto: UpdateProfessionalDto
  ): Promise<Professional> {
    const professional = await this.professionalsRepository.preload({
      id,
      ...updateProfessionalDto,
    });
    if (!professional) {
      throw new Error(`Professional with ID ${id} not found`);
    }
    return await this.professionalsRepository.save(professional);
  }

  async remove(id: number): Promise<void> {
    const professional = await this.professionalsRepository.findOne({ where: { id } });
    if (!professional) {
      throw new Error(`Professional with ID ${id} not found`);
    }
    await this.professionalsRepository.remove(professional);
  }
}

