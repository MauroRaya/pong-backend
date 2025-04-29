import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { rooms } from "src/shared/rooms";
import { Player } from "../player/player";
import { Room } from "./room";

@Controller('rooms')
export class RoomController {
    @Get()
    private getRoom() {
        return rooms;
    }

    @Post()
    private createRoom(@Body() player1: Player) {
        rooms.push(new Room(player1));
    }
}