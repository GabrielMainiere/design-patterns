import { AcademicBackground } from "./academicBackgroun";
import { Experience } from "./experience";

export class Resume {

    constructor(
        public name : string = "",
        public contact : string = "",
        public experiences : Experience[] = [],
        public academicBackground : AcademicBackground[] = []
    ){}
}