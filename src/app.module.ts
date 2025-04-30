import { Module } from '@nestjs/common';
import { PlayerModule } from './app/player/player.module';
import { RoomModule } from './app/room/room.module';

@Module({
  imports: [
    PlayerModule,
    RoomModule
  ]
})
export class AppModule {}
