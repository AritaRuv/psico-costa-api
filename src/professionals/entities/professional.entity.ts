import { AppointmentEntity } from 'src/appointments/entities/appointment.entity';
import { OfficeEntity } from 'src/office/entities/office.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity("professional")
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

  @ManyToOne(() => OfficeEntity, (office) => office.professionals)
  @JoinColumn({ name: 'officeId' })
  office: Office;
 
  @OneToMany(() => AppointmentEntity, (appointment) => appointment.professional)
  appointments: Appointment[];
}
