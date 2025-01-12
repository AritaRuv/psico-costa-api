import { AppointmentEntity } from 'src/appointments/entities/appointment.entity';
import { ProfessionalEntity } from 'src/professionals/entities/professional.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';

@Entity("office")
export class OfficeEntity extends BaseEntity implements Office {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @OneToMany(() => ProfessionalEntity, (professional) => professional.offices)
  professionals: Professional[];

  @OneToMany(() => AppointmentEntity, (appointment) => appointment.office)
  appointments: Appointment[];
}
