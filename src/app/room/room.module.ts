import { Module } from "@nestjs/common";
import { RoomController } from "./room.controller";
import { RoomService } from "./room.service";
import { DatabaseModule } from "src/shared/database/database.module";

@Module({
    imports: [DatabaseModule],
    providers: [RoomService],
    controllers: [RoomController]
})
export class RoomModule {}