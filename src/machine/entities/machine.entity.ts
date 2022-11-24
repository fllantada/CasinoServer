import { Reward, Symbol } from './types/machine.types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Machine {
  private slots: string[];
  rewards: Reward = {
    cherry: 10,
    lemon: 20,
    orange: 30,
    watermelon: 40,
  };
  private reward = 0;

  pullMachine(userCredits: number): {
    newCredits: number;
    playResults: string[];
  } {
    this.reward = 0;
    if (userCredits === 0) {
      return { newCredits: 0, playResults: [] };
    }

    // Create a new array of 3 random symbols
    this.spin();

    // Calculate Reward
    this.calculateReward();

    //make some cheat

    userCredits >= 40 && this.makeCheats(userCredits);

    // Update the user's credits

    const newUserCredits = userCredits + this.reward - 1;

    //cheat mode userCredits >

    return { newCredits: newUserCredits, playResults: this.slots };
  }
  makeCheats(userCredits: number) {
    if (this.reward > 0 && userCredits >= 40 && userCredits < 60) {
      this.probability(0.3) && this.spin();
      this.calculateReward();
    }
    if (this.reward > 0 && userCredits >= 60) {
      console.log('tiro de nuevo');
      this.probability(0.6) && this.spin();
      this.calculateReward();
    }
  }
  private spin() {
    this.slots = Array.from({ length: 3 }, () => this.getRandomSymbol());
  }
  private probability(num: number) {
    return Math.random() < num;
  }

  private getRandomSymbol(): Symbol {
    const symbols = Object.keys(this.rewards);
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex] as Symbol;
  }
  private calculateReward() {
    const [a, b, c] = this.slots;
    if (a === b && b === c) {
      this.reward = this.rewards[a];
    }
  }
}
