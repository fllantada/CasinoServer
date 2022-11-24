import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  //start new game
  @Post('/newGame')
  findAll(@Body() createGameDto: CreateGameDto) {
    return this.gameService.createNewGame(createGameDto);
  }

  //spin new game
  @Get('/play/:id')
  findOne(@Param('id') id: string) {
    return this.gameService.play(id);
  }
}
