import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { MachineService } from 'src/machine/machine.service';
import { PlayersService } from 'src/players/players.service';
import { MachineModule } from 'src/machine/machine.module';
import { PlayersModule } from 'src/players/players.module';

@Module({
  controllers: [GameController],
  providers: [GameService],
  imports: [PlayersModule, MachineModule],
})
export class GameModule {}
