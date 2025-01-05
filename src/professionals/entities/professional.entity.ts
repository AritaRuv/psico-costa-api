import { AppointmentEntity } from 'src/appointments/entities/appointment.entity';
import { OfficeEntity } from 'src/office/entities/office.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';

@Entity()
export class ProfessionalEntity extends BaseEntity implements Professional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  specialty: string;

  @OneToMany(() => AppointmentEntity, (appointment) => appointment.professional)
  appointments: Appointment[];

  @OneToMany(() => OfficeEntity, (office) => office.professionals)
  offices: Office[];
}
