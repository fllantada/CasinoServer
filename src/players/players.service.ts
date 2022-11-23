import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  create(playerData: CreatePlayerDto): Player {
    //check if exist

    const { id } = playerData;
    const playerAlreadyExists = this.players.find(
      (player: Player) => player.getData().id === id,
    );

    if (playerAlreadyExists) {
      return playerAlreadyExists;
    }
    const player = new Player(playerData);
    return player;
  }
}
