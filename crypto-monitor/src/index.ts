import { ConfigSingleton } from "./configSingleton";
import { CoingeckoAdapter } from "./cryptoApiAdapter";
import { AlertFactory } from "./alertFactory";
import { AlertStrategy } from "./alertStrategy";
import readlineSync from "readline-sync";

const config = ConfigSingleton.getInstance();
const api = new CoingeckoAdapter();

const thresholdAlert: AlertStrategy = AlertFactory.create({
  type: "threshold",
  buy: config.threshold.buy,
  sell: config.threshold.sell
});

const variationAlert: AlertStrategy = AlertFactory.create({
  type: "variation",
  percent: config.variation.percent,
  minutes : config.variation.minutes
});

async function main() {
  let coin =
    readlineSync.question(`Enter the coin name (${config.defaultCoin}): `) ||
    config.defaultCoin;

  while (true) {
    if (coin.toLowerCase() === "exit") break;

    try {
      const price = await api.getPrice(coin.toLowerCase());
      console.log(`${coin.toUpperCase()} current: $${price}`);

      await thresholdAlert.check(price);
      await variationAlert.check(price);
    } catch (err) {
      console.log("Error to search price:", err);
    }

    const next = readlineSync.question(
      "Enter another coin or 'exit' to close: "
    );
    if (next.toLowerCase() === "sair") break;
    coin = next;
  }
}

main();
