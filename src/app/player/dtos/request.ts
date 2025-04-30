import { IsString } from "class-validator";

export class PlayerRequestDTO {
    @IsString()
    name: string;
}