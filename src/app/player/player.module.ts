import { Module } from "@nestjs/common";
import { PlayerController } from "./player.controller";
import { DatabaseModule } from "src/shared/database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [PlayerController]
})
export class PlayerModule {}