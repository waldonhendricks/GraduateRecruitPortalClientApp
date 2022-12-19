import { HttpClient } from "@angular/common/http";
import {EnvironmentInjector, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Signin } from "../model/signin";

@Injectable({
    providedIn: 'root'
})

export class SigninService{
    private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public login(signin: Signin): Observable<Signin>{
        return this.http.post<Signin>(`${this.apiServerURL}/gradrecruitment/signin`,signin);
    }
}