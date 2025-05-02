import { Module } from "@nestjs/common";
import { PlayerController } from "./player.controller";
import { DatabaseModule } from "src/shared/database/database.module";
import { PlayerService } from "./player.service";

@Module({
    imports: [DatabaseModule],
    providers: [PlayerService],
    controllers: [PlayerController]
})
export class PlayerModule {}