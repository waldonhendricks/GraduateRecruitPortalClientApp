import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Experience } from "../model/experience";
import { GraduateProfile } from "../model/graduate";
import { Qualification } from "../model/qualification";

@Injectable({
    providedIn: 'root'
})

export class QualificationService{
    private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public addQualification(qualification: Qualification): Observable<Qualification>{
        return this.http.post<Qualification>(`${this.apiServerURL}/gradrecruitment/qualification/save_qualification`,qualification);
    }
}