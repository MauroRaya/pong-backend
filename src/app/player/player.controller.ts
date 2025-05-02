import { Body, Controller, Get, Post } from "@nestjs/common";
import { PlayerRequestDTO } from "./dtos/request";
import { PlayerService } from "./player.service";
import { PlayerResponseDTO } from "./dtos/response";

@Controller('players')
export class PlayerController {
    constructor(private readonly playerService: PlayerService) {}

    @Get()
    async getPlayers(): Promise<PlayerResponseDTO[]> {
        return await this.playerService.getPlayers();
    }

    @Post()
    async createPlayer(@Body() payload: PlayerRequestDTO): Promise<void> {
        await this.playerService.createPlayer(payload);
    }
}