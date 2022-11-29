import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { GraduateProfile } from "../model/graduate";

@Injectable({
    providedIn: 'root'
})

export class GraduateProfileService{
    private apiServerURL: string = environment.baseURL;

    constructor(private http: HttpClient){
    }

    public saveProfile(profile: GraduateProfile): Observable<GraduateProfile>{
        return this.http.post<GraduateProfile>(`${this.apiServerURL}/gradrecruitment/grad_profile/save_gradProfile`,profile);
    }
}