import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  id: string;
}
