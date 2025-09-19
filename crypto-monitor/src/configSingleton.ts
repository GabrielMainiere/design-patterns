import fs from "fs";

export class ConfigSingleton{

    private static instance : ConfigSingleton;

    public defaultCoin: string;
    public threshold: { buy: number; sell: number };
    public variation: { percent: number; minutes: number };

    private constructor() {
        const data = fs.readFileSync("config.json", "utf-8");
        const config = JSON.parse(data);
        this.defaultCoin = config.defaultCoin;
        this.threshold = config.threshold;
        this.variation = config.variation;
    }
    public static getInstance() : ConfigSingleton {
        if (!ConfigSingleton.instance) {
            return ConfigSingleton.instance = new ConfigSingleton();
        }
        else {
            return this.instance;
        }
    }
}