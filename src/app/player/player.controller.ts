import { Body, Controller, Get, Post } from "@nestjs/common";
import { players } from "src/shared/players";
import { PlayerDTO } from "./dtos/player.dto";
import { Player } from "./player";

@Controller('players')
export class PlayerController {
    @Get()
    private getPlayers() {
        return players;
    }

    @Post()
    private createPlayer(@Body() player: PlayerDTO) {
        players.push(new Player(player));
    }
}