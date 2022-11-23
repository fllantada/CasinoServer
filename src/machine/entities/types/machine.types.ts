export type Symbol = 'cherry' | 'lemon' | 'orange' | 'watermelon';

export type Reward = {
  [key in Symbol]: number;
};

export type SpinResult = {
  slots: string[];
  reward: number;
  credits: number;
};
