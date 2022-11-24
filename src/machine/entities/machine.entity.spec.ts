import { Test } from '@nestjs/testing';
import { MachineService } from '../machine.service';
import { Machine } from './machine.entity';

const winCondition = (playResults) =>
  playResults[0] == playResults[1] && playResults[1] == playResults[2];

describe('MachineService', () => {
  let service: MachineService;
  let machine: Machine;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MachineService, Machine],
    }).compile();

    service = module.get(MachineService);
    machine = module.get(Machine);
  });

  it('should abort if userCredits is 0', () => {
    const userCredits = 0;
    const result = service.spin(userCredits);
    expect(result).toEqual({ newCredits: 0, playResults: [] });
  });

  it('should return 1 credit less if it loose or more credits if wins', () => {
    let result = service.spin(10);

    let isWinner = winCondition(result.playResults);
    if (isWinner) expect(result.newCredits).toBeGreaterThan(10);
    else expect(result.newCredits).toBe(9);
  });

  it('Should call make Cheats if credit is more than 40', () => {
    const spy = jest.spyOn(machine, 'makeCheats');
    service.spin(50);
    expect(spy).toHaveBeenCalled();
  });

  it('Should not call make Cheats if credit is less than 40', () => {
    const spy = jest.spyOn(machine, 'makeCheats');
    service.spin(39);
    expect(spy).not.toHaveBeenCalled();
  });
});
