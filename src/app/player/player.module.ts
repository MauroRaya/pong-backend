import { Module } from "@nestjs/common";
import { PlayerController } from "./player.controller";
import { PlayerRepository } from "./player.repository";

@Module({
    providers: [PlayerRepository],
    controllers: [PlayerController]
})
export class PlayerModule {}