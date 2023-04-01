import { Vacancy } from "./vacancy";

export interface JobRequirement{
    jobRequirementId: string;
    requirement: string;
    vacancy: Vacancy;
}