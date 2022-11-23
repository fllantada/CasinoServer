export class Player {
  private id: string;
  private name: string;
  private credits: number;

  constructor(id: string, name: string, credits: number) {
    this.id = id;
    this.name = name;
    this.credits = credits;
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

  addCredits(score: number) {
    this.credits += score;
  }

  removeCredits(score: number) {
    this.credits -= score;
  }
}
