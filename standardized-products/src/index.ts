import readlineSync from "readline-sync";
import { FactoryAdapter } from "./factories/factoryAdapter";

async function main() {
    console.log("=== Product Loader ===");

    const inputFile = readlineSync.question("Enter the path to the product file: ");

    const format = readlineSync.question("Enter the file format (csv/json/xml): ");

    try {
        const provider = FactoryAdapter.create(format);
        const products = await provider.load(inputFile);

        console.log("\n=== Standardized Products ===");
        console.log(JSON.stringify(products, null, 2));
    } catch (err) {
        console.error("Error:", (err as Error).message);
    }
}

main();
