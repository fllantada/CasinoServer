import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { MachineService } from 'src/machine/machine.service';
import { PlayersService } from 'src/players/players.service';

@Module({
  controllers: [GameController],
  providers: [GameService, MachineService, PlayersService],
  imports: [],
})
export class GameModule {}
