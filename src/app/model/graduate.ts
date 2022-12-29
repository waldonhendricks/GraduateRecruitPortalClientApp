import { Experience } from "./experience";
import { Qualification } from "./qualification";
import { User } from "./user";

export interface Graduate extends User{
    firstName: string;
    middleName: string;
    lastName: string;
    preferredName: string;
    primaryEmail: string;
    secondaryEmail: string;
    gender: string;
    license: Boolean;
    country: string;
    studyPermit: Boolean;
    Qualifications: Array<Qualification>;
    Experiences: Array<Experience>
    GraduatePortalDocument: Array<any>;
    password: string;
    cellphone: string;
    graduateAdditionalFiles: Array<any>;

}