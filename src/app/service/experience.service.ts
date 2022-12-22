import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Experience } from "../model/experience";
import { Qualification } from "../model/qualification";

@Injectable({
    providedIn: 'root'
})

export class ExperienceService{
private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public addExperience(experience: Experience): Observable<Experience>{
        return this.http.post<Experience>(`${this.apiServerURL}/gradrecruitment/experience/save_experience`,experience);
    }
}