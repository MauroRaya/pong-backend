import { Body, Controller, Get, Post } from "@nestjs/common";
import { Room, RoomRepository } from "./room.repository";
import { RoomRequestDTO } from "./dtos/request";

@Controller('rooms')
export class RoomController {
    private readonly roomRepository: RoomRepository;

    constructor(roomRepository: RoomRepository) {
        this.roomRepository = roomRepository;
    }

    @Get()
    private getRoom(): Room[] {
        return this.roomRepository.getRooms();
    }

    @Post()
    private createRoom(@Body() payload: RoomRequestDTO): void {
        this.roomRepository.createRoom(payload);
    }
}