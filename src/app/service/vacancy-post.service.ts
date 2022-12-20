import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Department } from "../department";
import { Vacancy } from "../model/vacancy";

@Injectable({
    providedIn: 'root'
})

export class VacancyPostService{
    private apiServerURL: string = environment.baseURL;
    
    constructor(private http: HttpClient){
    }

    public saveDepartment(department: Department): Observable<Department>{
        return this.http.post<Department>(`${this.apiServerURL}/gradrecruitment/department/save_department`,department);
    }

    public saveVacancy(vacancyPost: Vacancy): Observable<Vacancy>{
       return this.http.post<Vacancy>(`${this.apiServerURL}/gradrecruitment/vacancy/save_vacancyPost`,vacancyPost);

    }
}