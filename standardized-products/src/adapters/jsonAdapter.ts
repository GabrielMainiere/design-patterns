import fs from "fs";
import { Product } from "../models/product";
import { IProductProvider } from "./productProvider";

export class JsonAdapter implements IProductProvider {
  async load(filePath: string): Promise<Product[]> {
    const content = fs.readFileSync(filePath, "utf-8");
    const data: Product[] = JSON.parse(content);
    return data;
  }
}
