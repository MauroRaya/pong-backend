import { Inject } from "@nestjs/common";
import { Sql } from "postgres";
import { DATABASE_CONNECTION } from "src/shared/database/database.module";
import { PlayerRequestDTO } from "./dtos/request";
import { PlayerResponseDTO } from "./dtos/response";

export class PlayerService {
    constructor(@Inject(DATABASE_CONNECTION) private readonly database: Sql) {}

    async getPlayers(): Promise<PlayerResponseDTO[]> {
        return await this.database<PlayerResponseDTO[]>`
            SELECT 
                id, name, score, room_id
            FROM
                player
        `
    }

    async createPlayer(player: PlayerRequestDTO): Promise<void> {
        await this.database`
            INSERT INTO player
                (name)
            VALUES
                (${player.name})
        `
    }
}