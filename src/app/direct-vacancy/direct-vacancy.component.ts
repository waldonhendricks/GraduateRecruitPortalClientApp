import { Component } from '@angular/core';
import { Vacancy } from '../model/vacancy';
import { VacancyService } from '../service/vacancy.service';
import { ToastrUtility } from '../utility/toast.utility';

@Component({
  selector: 'app-direct-vacancy',
  templateUrl: './direct-vacancy.component.html',
  styleUrls: ['./direct-vacancy.component.css']
})
export class DirectVacancyComponent
{
  vacancy: Vacancy = {
    vacacyId: '',
    vacancyTitle: '',
    jobType: '',
    jobRole: '',
    isApproved: false,
    location: '',
    jobDescription: '',
    jobResponsibilities: [],
    jobRequirements: []
  }

  vacancies: Array<Vacancy> = [];

  constructor(private vacancyService: VacancyService, private toast: ToastrUtility)
  {}

  ngOnInit(): void
  {
    this.getVacancies();
  }

  getVacancies() : void
  {
    this.vacancyService.getVacancies().subscribe(
    {
      next: (response: Array<Vacancy>) => {
        this.vacancies = response;
      },
      error: (errorResponse: any) => {
        this.toast.showtoastrError(errorResponse.error.error, "Request status");
        console.log(errorResponse.error.error);
        setTimeout(() => {
        }, 2000);
      }
    })
  }
}
