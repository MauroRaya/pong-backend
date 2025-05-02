import { IsNotEmpty, IsString, Length } from "class-validator";

export class RoomRequestDTO {
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    playerName: string;
}