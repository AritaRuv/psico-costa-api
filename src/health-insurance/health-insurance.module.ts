import { Module } from '@nestjs/common';
import { HealthInsuranceService } from './health-insurance.service';
import { HealthInsuranceController } from './health-insurance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthInsuranceEntity } from './entities/health-insurance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HealthInsuranceEntity])],
  controllers: [HealthInsuranceController],
  providers: [HealthInsuranceService],
})
export class HealthInsuranceModule {}
