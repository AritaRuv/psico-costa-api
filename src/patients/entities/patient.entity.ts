import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { AppointmentEntity } from 'src/appointments/entities/appointment.entity';
import { HealthInsuranceEntity } from 'src/health-insurance/entities/health-insurance.entity';

@Entity()
export class PatientEntity extends BaseEntity implements Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  email?: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  address?: string;

  @OneToMany(() => AppointmentEntity, (appointment) => appointment.patient, {
    nullable: true,
  })
  appointments: Appointment[];

  @ManyToOne(
    () => HealthInsuranceEntity,
    (healthInsurance) => healthInsurance.patients,
    { nullable: true }
  )
  healthInsurance: HealthInsurance;
}
