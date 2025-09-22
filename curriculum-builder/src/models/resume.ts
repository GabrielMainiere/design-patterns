import { Experience } from "./experience";
import { AcademicBackground } from "./academicBackgroun";

export class Resume {

    constructor(
        public name: string = "",
        public contact: string = "",
        public experiences: Experience[] = [],
        public academicBackground: AcademicBackground[] = []
    ) {}
}
