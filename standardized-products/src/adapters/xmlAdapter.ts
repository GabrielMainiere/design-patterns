import fs from "fs";
import { XMLParser } from "fast-xml-parser";
import { Product } from "../models/product";
import { IProductProvider } from "./productProvider";

export class XmlAdapter implements IProductProvider {
  async load(filePath: string): Promise<Product[]> {
    const content = fs.readFileSync(filePath, "utf-8");
    const parser = new XMLParser();
    const jsonObj = parser.parse(content);

    const items = jsonObj.products.product as { id: string; name: string; price: string }[];

    return items.map((item) => ({
      id: item.id,
      name: item.name,
      price: Number(item.price),
    }));
  }
}
