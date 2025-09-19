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

export class VariationStrategy implements AlertStrategy{
    private lastPrice: number | null = null;

    constructor(private percent : number){}

    async check(value: number): Promise<void> {
        
        if (this.lastPrice) {
            const difference = (Math.abs(value - this.lastPrice) / this.lastPrice) * 100;
            if (difference > this.percent) {
                console.log(`ALERT! ! Variation of ${difference.toFixed(2)}%`);
            }
        }
        this.lastPrice = value;
    }
}