import { Module } from "@nestjs/common";
import { PlayerController } from "./player.controller";
import { PlayerService } from "./player.service";

@Module({
    providers: [PlayerService],
    controllers: [PlayerController]
})
export class PlayerModule {}