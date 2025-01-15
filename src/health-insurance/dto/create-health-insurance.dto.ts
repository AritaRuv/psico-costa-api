import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateHealthInsuranceDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty() 
    coverageDetails: string;

    @IsOptional()
    patients: Patient[];
}
