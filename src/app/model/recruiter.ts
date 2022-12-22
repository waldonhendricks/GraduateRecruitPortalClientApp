import { User } from "./user";

export interface Recruiter extends User{
    recruitername: string;
    companyName: string;
    contactNumber: string;
    date: Date
}