import { Cv } from "./cv";
import { Experience } from "./experience";
import { Qualification } from "./qualification";
import { User } from "./user";

export interface Graduate extends User{
    preferredName: string;
    secondaryEmail: string;
    motorVehicleLicense: string;
    country: string;
    cv: Cv;
    qualifications: Array<Qualification>;
    experiences: Array<Experience>
}