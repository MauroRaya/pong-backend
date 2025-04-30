import { Injectable } from "@nestjs/common";
import { Player } from "../player/player.repository";
import { RoomRequestDTO } from "./dtos/request";

export class Room {
    code: number;
    player1: Player
    player2: Player;

    constructor(player1: Player) {
        this.code = this.createRoomCode();
        this.player1 = player1;
    }

    createRoomCode(): number {
        return Math.floor((Math.random() * 100) + 1);
    }
}

@Injectable()
export class RoomRepository {
    private readonly rooms = [] as Room[];

    getRooms(): Room[] {
        return this.rooms;
    }

    createRoom(roomRequestDTO: RoomRequestDTO): void {
        this.rooms.push(
            new Room(roomRequestDTO.player1)
        );
    }
}