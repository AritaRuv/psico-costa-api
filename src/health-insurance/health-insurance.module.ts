import { Module } from '@nestjs/common';
import { HealthInsuranceService } from './health-insurance.service';
import { HealthInsuranceController } from './health-insurance.controller';

@Module({
  controllers: [HealthInsuranceController],
  providers: [HealthInsuranceService],
})
export class HealthInsuranceModule {}
