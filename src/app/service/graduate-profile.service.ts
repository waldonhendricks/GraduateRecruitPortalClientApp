import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Graduate } from "../model/graduate";
import { UserSession } from "../model/userSession";

@Injectable({
    providedIn: 'root'
})

export class GraduateProfileService{
    private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public save(profile: Graduate): Observable<Graduate>
    {
        return this.http.post<Graduate>(`${this.apiServerURL}/graduate/signup`,profile);
    }

    public login(graduate: Graduate): Observable<UserSession>
    {
        return this.http.post<UserSession>(`${this.apiServerURL}/graduate/login`,graduate);
    }
}