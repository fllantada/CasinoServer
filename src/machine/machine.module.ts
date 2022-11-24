import { Module } from '@nestjs/common';
import { Machine } from './entities/machine.entity';
import { MachineService } from './machine.service';

@Module({
  providers: [MachineService, Machine],
  exports: [MachineService],
})
export class MachineModule {}
