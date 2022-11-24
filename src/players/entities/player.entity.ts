import { CreatePlayerDto } from 'src/players/dto/create-player.dto';

export class Player {
  private id: string;
  private name: string;
  private credits: number;

  constructor(playerData: CreatePlayerDto) {
    this.id = playerData.id;
    this.name = playerData.name;
    this.credits = playerData.credits;
  }
  getScore() {
    return this.credits;
  }
  getData() {
    return {
      id: this.id,
      name: this.name,
      credits: this.credits,
    };
  }

  updateScore(score: number) {
    this.credits = score;
  }
}
