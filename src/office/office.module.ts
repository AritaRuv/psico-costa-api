import { Module } from '@nestjs/common';
import { OfficeService } from './office.service';
import { OfficeController } from './office.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfficeEntity } from './entities/office.entity';
import { ProfessionalEntity } from 'src/professionals/entities/professional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OfficeEntity, ProfessionalEntity])],
  controllers: [OfficeController],
  providers: [OfficeService],
})
export class OfficeModule {}
