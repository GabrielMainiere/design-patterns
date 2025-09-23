import { IProductProvider } from "../adapters/productProvider";
import { CsvAdapter } from "../adapters/csvAdapter";
import { JsonAdapter } from "../adapters/jsonAdapter";
import { XmlAdapter } from "../adapters/xmlAdapter";

export class FactoryAdapter {
  static create(format: string): IProductProvider {
    switch (format.toLowerCase()) {
      case "csv":
        return new CsvAdapter();
      case "json":
        return new JsonAdapter();
      case "xml":
        return new XmlAdapter();
      default:
        throw new Error("Unsupported format");
    }
  }
}
