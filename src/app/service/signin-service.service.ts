import { HttpClient } from "@angular/common/http";
import {EnvironmentInjector, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Graduate } from "../model/faculty";

@Injectable({
    providedIn: 'root'
})

export class SigninService{
    private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public login(logInGraduate: Graduate): Observable<Graduate>{
        return this.http.post<Graduate>(`${this.apiServerURL}/gradrecruitment/signin`,logInGraduate);
    }
}