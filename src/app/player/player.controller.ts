import { Body, Controller, Get, Post } from "@nestjs/common";
import { Player, PlayerRepository } from "./player.repository";
import { PlayerRequestDTO } from "./dtos/request";

@Controller('players')
export class PlayerController {
    private readonly playerRepository: PlayerRepository;
    
    constructor(playerRepository: PlayerRepository) {
        this.playerRepository = playerRepository;
    }

    @Get()
    getPlayers(): Player[] {
        return this.playerRepository.getPlayers();
    }

    @Post()
    createPlayer(@Body() payload: PlayerRequestDTO): void {
        this.playerRepository.createPlayer(payload);
    }
}