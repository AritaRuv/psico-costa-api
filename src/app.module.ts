import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from './patients/patients.module';
import { ProfessionalsModule } from './professionals/professionals.module';
import { HealthInsuranceModule } from './health-insurance/health-insurance.module';
import { OfficeModule } from './office/office.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ezequiel_etchevest',
      password: '1234AA!',
      database: 'psico_costa',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PatientsModule,
    ProfessionalsModule,
    HealthInsuranceModule,
    OfficeModule,
    AppointmentsModule,
  ],
})
export class AppModule {}
