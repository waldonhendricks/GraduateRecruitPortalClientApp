import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Experiecnce } from "../model/experience";
import { Qualification } from "../model/qualification";

@Injectable({
    providedIn: 'root'
})

export class ExperienceService{
private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public addExperience(experience: Experiecnce): Observable<Experiecnce>{
        return this.http.post<Experiecnce>(`${this.apiServerURL}/gradrecruitment/experience/save_experience`,experience);
    }
}