import axios from "axios";

export interface ICryptoAPI {
    getPrice(coin : string) : Promise<number>
}

export class CoingeckoAdapter implements ICryptoAPI {
    async getPrice(coin: string): Promise<number> {
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`);
        return res.data[coin].usd;
    }
}