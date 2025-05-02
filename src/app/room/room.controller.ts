import { Body, Controller, Get, Post } from "@nestjs/common";
import { RoomRequestDTO } from "./dtos/request";
import { RoomService } from "./room.service";
import { RoomResponseDTO } from "./dtos/response";

@Controller('rooms')
export class RoomController {
    constructor(private readonly roomService: RoomService) {}

    @Get()
    getRoom(): Promise<RoomResponseDTO[]> {
        return this.roomService.getRooms();
    }

    @Post()
    createRoom(@Body() payload: RoomRequestDTO): void {
        this.roomService.createRoom(payload);
    }
}