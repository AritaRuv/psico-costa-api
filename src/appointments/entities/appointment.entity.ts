import { OfficeEntity } from 'src/office/entities/office.entity';
import { PatientEntity } from 'src/patients/entities/patient.entity';
import { ProfessionalEntity } from 'src/professionals/entities/professional.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

@Entity() //Tabla de la base de datos
export class AppointmentEntity extends BaseEntity implements Appointment {
  // una clase es una especie de objeto
  @PrimaryGeneratedColumn() //primary key
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => PatientEntity, (patient) => patient.appointments)
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @ManyToOne(
    () => ProfessionalEntity,
    (professional) => professional.appointments
  )
  @JoinColumn({ name: 'professionalId' })
  professional: Professional;

  @ManyToOne(() => OfficeEntity, (office) => office.appointments)
  @JoinColumn({ name: 'officeId' })
  office: Office;
}
