import { IsNotEmpty, IsString, Length } from "class-validator";

export class RoomRequestDTO {
    @IsString()
    @IsNotEmpty()
    @Length(2, 50)
    playerName: string;
}