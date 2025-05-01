import { Module } from '@nestjs/common';
import { PlayerModule } from './app/player/player.module';
// import { RoomModule } from './app/room/room.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    PlayerModule
  ]
})
export class AppModule {}
