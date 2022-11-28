import { HttpClient } from "@angular/common/http";
import {EnvironmentInjector, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Graduate } from "../model/signup";

@Injectable({
    providedIn: 'root'
})

export class SignupService{
    private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public register(signup: Graduate): Observable<Graduate>{
        return this.http.post<Graduate>(`${this.apiServerURL}/gradrecruitment/signup/save_registration`,signup);
    }
}