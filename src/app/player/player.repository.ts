import { Injectable } from "@nestjs/common";
import { PlayerRequestDTO } from "./dtos/request";

export class Player {
    name: string;
    score: number;

    constructor(name: string) {
        this.name = name;
        this.score = 0;
    }
}

@Injectable()
export class PlayerRepository {
    private readonly players = [] as Player[];

    getPlayers(): Player[] {
        return this.players;
    }

    createPlayer(playerRequestDTO: PlayerRequestDTO): void {
        this.players.push(
            new Player(playerRequestDTO.name)
        );
    }
}