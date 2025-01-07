import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from './patients/patients.module';
import { ProfessionalsModule } from './professionals/professionals.module';
import { HealthInsuranceModule } from './health-insurance/health-insurance.module';
import { OfficeModule } from './office/office.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './configutation';
import { DEFAULT_ENTITIES } from './default-entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          ...config.get('db'),
          entities: DEFAULT_ENTITIES,
          migrationsRun: false,
          synchronize: config.get('db.synchronize'),
          extra: {
            max: 50,
            option: '-c statement_timeout=10000',
          },
        };
      },
    }),
    PatientsModule,
    ProfessionalsModule,
    HealthInsuranceModule,
    OfficeModule,
    AppointmentsModule,
  ],
})
export class AppModule {}
