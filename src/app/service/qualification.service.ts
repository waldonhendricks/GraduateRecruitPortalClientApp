import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { GraduateProfile } from "../model/graduate";

@Injectable({
    providedIn: 'root'
})

export class QualificationService{
    private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public addGraduate(graduate: GraduateProfile): Observable<GraduateProfile>{
        return this.http.post<GraduateProfile>(`${this.apiServerURL}/gradrecruitment/graduate/save_graduate`,graduate);

    }
}