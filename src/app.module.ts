import { Module } from '@nestjs/common';
import { PlayerModule } from './app/player/player.module';
import { RoomModule } from './app/room/room.module';
import { DatabaseModule } from './shared/database/database.module';
import { EnvModule } from './shared/env/env.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true
    }),
    EnvModule,
    DatabaseModule,
    PlayerModule,
    RoomModule
  ]
})
export class AppModule {}
