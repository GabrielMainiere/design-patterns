export interface AlertStrategy{
    check(value : number) : Promise<void>;
}

export class ThresholdStrategy implements AlertStrategy{

    constructor( private buy : number, private sell : number){}

    async check(value : number) : Promise<void>{
        if (value < this.buy) {
            console.log(`ALERT! Low price to buy! (${value})`);
        }
        if (value > this.sell) {
            console.log(`ALERT! High price to sell! (${value})`);
        }
    }
}

export class VariationStrategy implements AlertStrategy {
  private lastPrice: number | null = null;
  private lastTimestamp: number | null = null;

  constructor(private percent: number, private minutes: number) {}

  async check(value: number): Promise<void> {
    const now = Date.now();

    if (this.lastPrice !== null && this.lastTimestamp !== null) {
      const minutesPassed = (now - this.lastTimestamp) / (1000 * 60);
      
      if (minutesPassed <= this.minutes) {
        const difference = (Math.abs(value - this.lastPrice) / this.lastPrice) * 100;
        if (difference > this.percent) {
          console.log(
            `ALERT! Variation of ${difference.toFixed(2)}% in ${minutesPassed.toFixed(1)} minutes`
          );
        }
      }
    }
    this.lastPrice = value;
    this.lastTimestamp = now;
  }
}