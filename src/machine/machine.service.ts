import { Injectable } from '@nestjs/common';
import { Machine } from './entities/machine.entity';

@Injectable()
export class MachineService {
  constructor(private readonly machine: Machine) {}

  spin(userCredits: number) {
    return this.machine.pullMachine(userCredits);
  }
}
