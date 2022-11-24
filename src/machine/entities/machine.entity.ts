import { Reward, Symbol } from './types/machine.types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Machine {
  private slots: string[];
  private rewards: Reward = {
    cherry: 10,
    lemon: 20,
    orange: 30,
    watermelon: 40,
  };

  pullMachine(userCredits: number): {
    newCredits: number;
    playResults: string[];
  } {
    // Create a new array of 3 random symbols
    this.slots = Array.from({ length: 3 }, () => this.getRandomSymbol());

    console.log('slots', this.slots);

    // Calculate the reward
    const reward = this.calculateReward();
    console.log('reward', reward);

    // Update the user's credits
    const newUserCredits = userCredits + reward - 1;

    return { newCredits: newUserCredits, playResults: this.slots };
  }
  private getRandomSymbol(): Symbol {
    const symbols = Object.keys(this.rewards);
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex] as Symbol;
  }
  private calculateReward(): number {
    const [a, b, c] = this.slots;
    if (a === b && b === c) {
      return this.rewards[a];
    }
    return 0;
  }
}
