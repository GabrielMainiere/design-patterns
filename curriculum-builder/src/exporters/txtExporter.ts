import { Resume } from "../models/resume";
import { IExporter } from "./exporter";
import * as fs from "fs";

export class TxtExporter implements IExporter {

    async export(resume: Resume, filename: string): Promise<void> {
        let content = `Name: ${resume.name}\nContact: ${resume.contact}\n\nExperiences:\n`;
        resume.experiences.forEach((exp) => {
        content += `- ${exp.role} at ${exp.enterprise} (${exp.period})\n`;
        });

        content += `\nAcademic Background:\n`;
        resume.academicBackground.forEach((edu) => {
        content += `- ${edu.degree} at ${edu.institution} (${edu.period})\n`;
        });

        fs.writeFileSync(`${filename}.txt`, content);
        console.log(`Resume exported to ${filename}.txt`);
    }
}
