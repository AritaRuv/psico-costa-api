import { AppointmentEntity } from './appointments/entities/appointment.entity';
import { HealthInsuranceEntity } from './health-insurance/entities/health-insurance.entity';
import { OfficeEntity } from './office/entities/office.entity';
import { PatientEntity } from './patients/entities/patient.entity';
import { ProfessionalEntity } from './professionals/entities/professional.entity';

export const DEFAULT_ENTITIES = [
  PatientEntity,
  ProfessionalEntity,
  OfficeEntity,
  HealthInsuranceEntity,
  AppointmentEntity,
];
