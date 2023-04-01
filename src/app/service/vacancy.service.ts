import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Department } from "../model/department";
import { Vacancy } from "../model/vacancy";

@Injectable({
    providedIn: 'root'
})

export class VacancyService{
    private apiServerURL: string = environment.baseURL;
    
    constructor(private http: HttpClient){
    }

    public saveVacancy(vacancyPost: Vacancy): Observable<Vacancy>
    {
       return this.http.post<Vacancy>(`${this.apiServerURL}/gradrecruitment/vacancy/save_vacancyPost`,vacancyPost);
    }

    public getVacancy(vacacyId: string): Observable<Vacancy>
    {
        return this.http.get<Vacancy>(`${this.apiServerURL}/vacancy/read/${vacacyId}`);
    }

    public getVacancies(): Observable<Array<Vacancy>>
    {
        return this.http.get<Array<Vacancy>>(`${this.apiServerURL}/vacancy/find-all`);
    }
}