import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class EnvironmentVariables {
    @IsNotEmpty()
    @IsNumber()
    PORT: number;

    @IsNotEmpty()
    @IsString()
    DATABASE_PASSWORD: string;

    @IsNotEmpty()
    @IsString()
    DATABASE_URL: string;
}