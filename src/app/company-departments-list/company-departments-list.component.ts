import { Component } from '@angular/core';
import { DepartmentListSharerService } from '../local-service/department-list-sharer.service';

@Component({
  selector: 'app-company-departments-list',
  templateUrl: './company-departments-list.component.html',
  styleUrls: ['./company-departments-list.component.css']
})
export class CompanyDepartmentsListComponent {
  constructor(departpmentListSharerService: DepartmentListSharerService)
  { }

  
}
