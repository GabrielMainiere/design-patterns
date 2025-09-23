import { Product } from "../models/product";

export interface IProductProvider {
  load(filePath: string): Promise<Product[]>;
}
