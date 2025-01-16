import { Injectable } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OfficeEntity } from './entities/office.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(OfficeEntity)
    private readonly officeRepository: Repository<OfficeEntity>
  ) {}

  async create(createOfficeDto: CreateOfficeDto): Promise<Office> {
    const newOfficeEntity = new OfficeEntity();
    newOfficeEntity.name = createOfficeDto.name
    newOfficeEntity.location = createOfficeDto.location
    newOfficeEntity.professionals = createOfficeDto.professionals.map((id) => ({
      id: id,
    }));

    // const newOffice = this.officeRepository.create(createOfficeDto);
    return await this.officeRepository.save(newOfficeEntity);
  }

  async findAll(): Promise<Office[]> {
    return await this.officeRepository.find();
  }

  async findOne(id: number): Promise<Office> {
    const office = await this.officeRepository.findOne({ where: { id } });
    if (!office) {
      throw new Error(`Office with ID ${id} not found`);
    }
    return office;
  }

  async update(id: number, updateOfficeDto: UpdateOfficeDto): Promise<Office> {
    const office = await this.officeRepository.preload({
      id,
      ...updateOfficeDto,
    });
    if (!office) {
      throw new Error(`Office with ID ${id} not found`);
    }
    return await this.officeRepository.save(office);
  }

  async remove(id: number): Promise<void> {
    const office = await this.officeRepository.findOne({ where: { id } });
    if (!office) {
      throw new Error(`Office with ID ${id} not found`);
    }
    await this.officeRepository.remove(office);
  }
}
