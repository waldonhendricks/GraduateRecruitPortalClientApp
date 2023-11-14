import { JobRequirement } from "./jobRequirement";
import { JobResponsibility } from "./jobResponsibility";

export interface Vacancy{
    vacacyId: string;
    vacancyTitle: string;
    jobType: string;
    jobRole: string;
    isApproved: Boolean;
    location: string;
    jobDescription: string;
    jobResponsibilities: Array<JobResponsibility>;
    jobRequirements: Array<JobRequirement>;
}
