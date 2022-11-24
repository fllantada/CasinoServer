import { Module } from '@nestjs/common';
import { MachineModule } from './machine/machine.module';
import { PlayersModule } from './players/players.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [MachineModule, PlayersModule, GameModule],
})
export class AppModule {}
