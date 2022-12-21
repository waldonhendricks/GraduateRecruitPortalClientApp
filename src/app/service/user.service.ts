// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { environment } from "src/environments/environment";
// import { User } from "../model/user";

// @Injectable({
//     providedIn: 'root'
// })

// export class UserService{

//     private apiServerURL: string = environment.baseURL;

//     constructor(private http: HttpClient){
//     }

//     public registerUser(user: User): Observable<User>{
//         return this.http.post<User>(`${this.apiServerURL}/gradrecruitment/signup/save_user`,user);
//     }

//     public updateUser(updateUser: User): Observable<User>{
//         return this.http.put<User>(`${this.apiServerURL}/gradrecruitment/signup/update_user`,updateUser);
//     }

//     //add a delete service here

// }