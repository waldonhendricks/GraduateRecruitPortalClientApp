import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vacancy } from '../model/vacancy';

@Injectable({
  providedIn: 'root'
})
export class DirectVacancyService
{

  private apiServerURL: string = environment.baseURL;

  constructor (private http: HttpClient) { }

  public getVacancies(): Observable<Array<Vacancy>>
  {
    return this.http.get<Array<Vacancy>>(`${this.apiServerURL}/vacancy/find-all/`);
  }
}
