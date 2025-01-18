import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreateOfficeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsArray()
  @IsOptional()
  professionals: number[];
}

