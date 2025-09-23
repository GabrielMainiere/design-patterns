import fs from "fs";
import { parse } from "csv-parse/sync";
import { Product } from "../models/product";
import { IProductProvider } from "./productProvider";

export class CsvAdapter implements IProductProvider {
  async load(filePath: string): Promise<Product[]> {
    const content = fs.readFileSync(filePath, "utf-8");
  
    const records: Record<string, string>[] = parse(content, { columns: true, skip_empty_lines: true });

    return records.map((r) => ({
    id: r["id"],
    name: r["name"],
    price: Number(r["price"]),
    }));
  }
}
