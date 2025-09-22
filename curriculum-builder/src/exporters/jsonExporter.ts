import { Resume } from "../models/resume";
import { IExporter } from "./exporter";
import * as fs from "fs"

export class JsonExporter implements IExporter{

    async export(resume : Resume, filename : string) : Promise<void>{
        fs.writeFileSync(`${filename}.json`, JSON.stringify(resume, null, 2));
        console.log(`Curriculum exported to ${filename}.json`);
    }
}