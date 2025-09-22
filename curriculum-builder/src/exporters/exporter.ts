import { Resume } from "../models/resume";

export interface IExporter {
    export(resume : Resume, filename : string) : Promise<void>
}