import {  IsDate, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreatePatientDto {   
@IsString()
@IsNotEmpty()
firstName: string;

@IsString()
@IsNotEmpty()
lastName: string;

@IsEmail()
email?: string;

//@IsPhoneNumber('AR', { message: 'El número de teléfono no es válido para Argentina' })
@IsPhoneNumber()
@IsNotEmpty()
phoneNumber: string;

@IsDate()
@IsNotEmpty()
birthDate: Date;

@IsString()
address?: string;

@IsOptional()
appointments?: Appointment[];

@IsOptional()
healthInsurance?: HealthInsurance;
}