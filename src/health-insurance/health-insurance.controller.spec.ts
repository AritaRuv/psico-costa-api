import { Test, TestingModule } from '@nestjs/testing';
import { HealthInsuranceController } from './health-insurance.controller';
import { HealthInsuranceService } from './health-insurance.service';

describe('HealthInsuranceController', () => {
  let controller: HealthInsuranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthInsuranceController],
      providers: [HealthInsuranceService],
    }).compile();

    controller = module.get<HealthInsuranceController>(
      HealthInsuranceController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
