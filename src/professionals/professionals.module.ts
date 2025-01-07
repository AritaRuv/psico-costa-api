import { Module } from '@nestjs/common';
import { ProfessionalsService } from './professionals.service';
import { ProfessionalsController } from './professionals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalEntity } from './entities/professional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessionalEntity])],
  controllers: [ProfessionalsController],
  providers: [ProfessionalsService],
})
export class ProfessionalsModule {}
