import { AlertStrategy, ThresholdStrategy, VariationStrategy } from "./alertStrategy";

type AlertConfig =
  | { type: "threshold"; buy: number; sell: number }
  | { type: "variation"; percent: number };

export class AlertFactory{

    static create(config : AlertConfig): AlertStrategy{

        switch(config.type){
            case "threshold":
                return new ThresholdStrategy(config.buy, config.sell);
            case "variation":
                return new VariationStrategy(config.percent);
        }
    }
}