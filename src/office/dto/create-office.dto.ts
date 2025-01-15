import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOfficeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsOptional()
  professionals: Professional[];

  @IsOptional()
  appointments: Appointment[];
}

