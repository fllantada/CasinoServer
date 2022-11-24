import { Injectable } from '@nestjs/common';
import { Machine } from './entities/machine.entity';
import { SpinResult } from './entities/types/machine.types';

@Injectable()
export class MachineService {
  constructor(private readonly machine: Machine) {}

  spin(userCredits: number): { newCredits: number; playResults: string[] } {
    return this.machine.pullMachine(userCredits);
  }
}
