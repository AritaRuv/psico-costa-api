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
    // const newEntidad = new EntidadX()
    // newEntidad.name = 'Consultorio1'
    // newEntidad.location = 'al fondo a la derecha'
    // const entidadDB = repository.create(newEntidad)
    // y despues guardo con el repository.save(entidadDB)

    const newOffice = this.officeRepository.create(createOfficeDto);
    return await this.officeRepository.save(newOffice);
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
