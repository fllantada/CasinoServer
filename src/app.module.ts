import { Module } from '@nestjs/common';
import { PlayersService } from 'src/players/players.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachineModule } from './machine/machine.module';

@Module({
  imports: [PlayersService, MachineModule],
  controllers: [AppController],
  providers: [AppService, PlayersService],
})
export class AppModule {}
