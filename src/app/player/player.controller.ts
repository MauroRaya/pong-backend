import { Body, Controller, Get, Post } from "@nestjs/common";
import { PlayerRequestDTO } from "./dtos/request";
import { IPlayerRepository } from "./player.repository";
import { DatabaseService } from "src/shared/database/database.service";

@Controller('players')
export class PlayerController {
    constructor(private readonly databaseService: DatabaseService) {}

    @Get()
    async getPlayers(): Promise<IPlayerRepository[]> {
        return await this.databaseService.database<IPlayerRepository[]>`
            SELECT 
            id, name, score, room_id
            FROM player
        `
    }

    @Post()
    async createPlayer(@Body() payload: PlayerRequestDTO): Promise<void> {
        await this.databaseService.database`
            INSERT INTO player
            (name)
            VALUES
            (${payload.name})
        `
    }
}