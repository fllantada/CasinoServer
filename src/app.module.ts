import { Module } from '@nestjs/common';
import { PlayersService } from 'players/players.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PlayersService],
  controllers: [AppController],
  providers: [AppService, PlayersService],
})
export class AppModule {}
