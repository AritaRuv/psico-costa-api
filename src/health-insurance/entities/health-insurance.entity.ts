import { PatientEntity } from 'src/patients/entities/patient.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';

@Entity()
export class HealthInsuranceEntity
  extends BaseEntity
  implements HealthInsurance
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  coverageDetails: string;
  @OneToMany(() => PatientEntity, (patient) => patient.healthInsurance)
  patients: Patient[];
}
