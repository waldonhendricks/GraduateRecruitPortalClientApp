import { Vacancy } from "./vacancy";

export interface JobResponsibility{
    jobResponsibilityId: string;
    responsibility: string;
    vacancy: Vacancy;
}