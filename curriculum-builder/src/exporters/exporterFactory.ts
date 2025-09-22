import { IExporter } from "./exporter";
import { JsonExporter } from "./jsonExporter";
import { TxtExporter } from "./txtExporter";

export class ExporterFactory {

    static create (format : string): IExporter {
        switch (format) {
            case "json":
                return new JsonExporter();
            case "txt" :
                return new TxtExporter();
            default:
                throw new Error("Format not supported.");
        }
    }
}