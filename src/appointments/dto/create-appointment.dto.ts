import { IsNotEmpty, IsInt, IsDateString } from "class-validator";

export class CreateAppointmentDto {  
    
    @IsNotEmpty()
    @IsDateString()
    date: string;
  
    @IsNotEmpty()
    @IsInt()
    patient: number;

    @IsNotEmpty()
    @IsInt()
    professional: number;

    @IsNotEmpty()
    @IsInt()
    office: number;
}
