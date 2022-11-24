import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';

import { MachineService } from 'src/machine/machine.service';
import { PlayersService } from 'src/players/players.service';

@Injectable()
export class GameService {
  constructor(
    private readonly machineService: MachineService,
    private readonly playersService: PlayersService,
  ) {}

  createNewGame(createGameDto: CreateGameDto) {
    const { name, id } = createGameDto;

    //player exist ?
    const player = this.playersService.find(id);

    if (!player) {
      const credits = 10;
      const newPlayer = this.playersService.create({ id, name, credits });
      return newPlayer;
    }
    return player;
  }

  play(id: string) {
    const player = this.playersService.find(id);
    if (!player) return 'player not found';
    const playerData = player.getData();

    const { newCredits, playResults } = this.machineService.spin(
      playerData.credits,
    );
    player.updateScore(newCredits);

    console.log('player', player.getData());

    //update player score

    return { player: player.getData(), playResults };
  }
  checkout(id: string) {
    const player = this.playersService.find(id);
    if (!player) return 'player not found';
    const playerData = player.getData();
    return playerData;
  }
}
