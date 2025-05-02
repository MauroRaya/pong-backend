import { Inject, Injectable } from "@nestjs/common";
import { Sql } from "postgres";
import { DATABASE_CONNECTION } from "src/shared/database/database.module";
import { RoomResponseDTO } from "./dtos/response";
import { RoomRequestDTO } from "./dtos/request";

@Injectable()
export class RoomService {
    constructor(@Inject(DATABASE_CONNECTION) private readonly database: Sql) {}

    async getRooms(): Promise<RoomResponseDTO[]> {
        return await this.database`
            SELECT
                id
            FROM
                room
        `
    }

    async createRoom(room: RoomRequestDTO): Promise<void> {
        await this.database`
            INSERT INTO room
                ()
            VALUES
                ()
        `
    }
}