import { Module } from '@nestjs/common';
import { PlayerModule } from './app/player/player.module';
import { RoomModule } from './app/room/room.module';
import { DatabaseModule } from './shared/database/database.module';
import { EnvModule } from './shared/env/env.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true
    }),
    ThrottlerModule.forRoot([{
      ttl: 60 * 1000,
      limit: 5,
    }]),
    EnvModule,
    DatabaseModule,
    PlayerModule,
    RoomModule
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }]
})
export class AppModule {}
