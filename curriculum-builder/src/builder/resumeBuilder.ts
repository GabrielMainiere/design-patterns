import { Resume } from "../models/resume";
import { Experience } from "../models/experience";
import { AcademicBackground } from "../models/academicBackgroun";

export class ResumeBuilder {
    private resume: Resume;

    constructor() {
        this.resume = new Resume(); 
    }

    withName(name: string): this {
        this.resume.name = name;
        return this;
    }

    withContact(contact: string): this {
        this.resume.contact = contact;
        return this;
    }

    addExperience(enterprise : string, role : string, description : string, period : string): this {
        this.resume.experiences.push(new Experience(enterprise, role, description, period));
        return this;
    }

    addEducation(degree: string, institution: string, period: string): this {
        this.resume.academicBackground.push(new AcademicBackground(degree, institution, period));
        return this;
    }

    build(): Resume {
        return this.resume;
    }
}