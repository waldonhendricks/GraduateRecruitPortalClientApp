import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Graduate } from '../model/graduate';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private apiServerURL: string = environment.baseURL;

  constructor(private http: HttpClient){
  }

  public saveGradudate(graudate: Graduate): Observable<Graduate>{
      return this.http.post<Graduate>(`${this.apiServerURL}/graduate/save`, graudate);
  }
}
