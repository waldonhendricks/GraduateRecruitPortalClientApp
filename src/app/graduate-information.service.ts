import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GraduateProfile } from './model/graduate';

@Injectable({
  providedIn: 'root'
})
export class GraduateInformationService {
  private apiServerURL: string = environment.baseURL;

  constructor(private http: HttpClient){
  }

  public getGraduate(graduateId: number): Observable<Graduate>{
      return this.http.get<Graduate>(`${this.apiServerURL}/read/`,graduateId);
  }
  
  public getDocuments():Observable<Array<any>>{
  return this.http.get<Array<any>>(`${this.apiServerURL}/find-all`);
  }
}
