import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  create(playerData: CreatePlayerDto): Player {
    //check if exist
    const { id } = playerData;
    const playerAlreadyExists = this.find(id);

    if (playerAlreadyExists) return playerAlreadyExists;

    const player = new Player(playerData);
    this.players.push(player);
    return player;
  }
  find(id: string): Player {
    console.log('desde find tengo en players:', this.players);
    return this.players.find((player: Player) => player.getData().id === id);
  }
}
