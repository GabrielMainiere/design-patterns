import { Resume } from "../models/resume";
import { IExporter } from "./exporter";
import * as fs from "fs";

export class TxtExporter implements IExporter {

  async export(resume: Resume, filename: string): Promise<void> {
    let content = `Nome: ${resume.name}\nContato: ${resume.contact}\n\nExperiências:\n`;
    resume.experiences.forEach((exp) => {
      content += `- ${exp.role} na ${exp.enterprise} (${exp.period})\n`;
    });

    content += `\nFormação Acadêmica:\n`;
    resume.academicBackground.forEach((edu) => {
      content += `- ${edu.degree} na ${edu.institution} (${edu.period})\n`;
    });

    fs.writeFileSync(`${filename}.txt`, content);
    console.log(`Currículo exportado para ${filename}.txt`);
  }
}
