import { Component, OnInit} from '@angular/core';
import { Department } from '../model/department';
import { SelectService } from '../service/select.service';
import { Course } from '../model/course';



@Component({
  selector: 'app-vacancy-pdf-view',
  templateUrl: './vacancy-pdf-view.component.html',
  styleUrls: ['./vacancy-pdf-view.component.css']
})
export class VacancyPdfViewComponent implements OnInit {
  title: string = 'vacancyPDFView';
  src: string = 'assets/demoPDF.pdf';
  page: number = 1;
  totalPages: number = 0;
  isLoaded: boolean = false;
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }


  selectedDepartment: Department = new Department(2, 'Brazil');
  departments: Department[] = [];
  courses: Course[] = [];

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.departments = this.selectService.getDepartments();
    this.onSelect(this.selectedDepartment.id);
  }

  onSelect(departmentid: any) {
    this.courses = this.selectService.getCourses().filter((item) => item.departmentid == departmentid);
  }


  getVacancy()
  {
    alert ("Applied")
  }

}
