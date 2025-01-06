import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { AppointmentEntity } from 'src/appointments/entities/appointment.entity';
import { HealthInsuranceEntity } from 'src/health-insurance/entities/health-insurance.entity';
import { BaseEntity } from 'src/base-entity/base-entity.entity';

@Entity()
export class PatientEntity extends BaseEntity implements Patient {
  //una especie de objeto que va a definir la estructura de una tabla dentro de la base de datos
  @PrimaryGeneratedColumn() // PK
  id: number;

  @Column()
  firstName: string;

  @Column() // por defecto -> { nullable: false }
  lastName: string;

  @Column({ nullable: true }) // ? -> puede estar o no
  email?: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  address?: string;

  //relaciones entre tablas de la base de datos

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
