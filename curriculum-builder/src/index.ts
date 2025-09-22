import { ResumeBuilder } from "./builder/resumeBuilder";
import { ExporterFactory} from "./exporters/exporterFactory";
import readlineSync from "readline-sync";

console.log("=== Curriculum Builder ===");
const builder = new ResumeBuilder();

const name = readlineSync.question("Enter your name: ");
builder.withName(name);

const contact = readlineSync.question("Enter your contact info: ");
builder.withContact(contact);


while (true) {
  const addExp = readlineSync.question("Add work experience? (y/n): ");
  if (addExp.toLowerCase() !== "y") break;

  const enterprise = readlineSync.question("Enterprise: ");
  const role = readlineSync.question("Role/Position: ");
  const description = readlineSync.question("Description of the job: ");
  const period = readlineSync.question("Period (e.g., 2019-2023): ");
  builder.addExperience(enterprise, role, description, period);
}

while (true) {
  const addEdu = readlineSync.question("Add academic background? (y/n): ");
  if (addEdu.toLowerCase() !== "y") break;

  const degree = readlineSync.question("Degree/Title: ");
  const institution = readlineSync.question("Institution: ");
  const period = readlineSync.question("Period (e.g., 2015-2019): ");
  builder.addEducation(degree, institution, period);
}

const resume = builder.build();

while (true) {
  const format = readlineSync.question(
    "In which format would you like to save the resume? (json/txt or exit): "
  );
  if (format.toLowerCase() === "exit") break;

  try {
    const exporter = ExporterFactory.create(format);
    exporter.export(resume, "curriculum");
  } catch (err) {
    console.log((err as Error).message);
  }
}
