import { HttpClient } from "@angular/common/http";
import {EnvironmentInjector, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Graduate } from "../model/faculty";
import { GraduateProfile } from "../model/graduate";

@Injectable({
    providedIn: 'root'
})

export class SigninService{
    private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public login(logInGraduate: GraduateProfile): Observable<GraduateProfile>{
        return this.http.post<GraduateProfile>(`${this.apiServerURL}/gradrecruitment/signin`,logInGraduate);
    }
}