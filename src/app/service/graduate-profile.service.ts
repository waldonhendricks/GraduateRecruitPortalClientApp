import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Graduate } from "../model/graduate";

@Injectable({
    providedIn: 'root'
})

export class GraduateProfileService{
    private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public saveProfile(profile: Graduate): Observable<Graduate>{
        return this.http.post<Graduate>(`${this.apiServerURL}/gradrecruitment/grad_profile/save_gradProfile`,profile);
    }
}