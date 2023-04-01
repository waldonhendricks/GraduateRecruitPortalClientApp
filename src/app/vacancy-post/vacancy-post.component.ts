import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrUtility } from '../utility/toast.utility';
import { VacancyService } from '../service/vacancy.service'
import { Vacancy } from '../model/vacancy';
import { Department } from '../model/department';

@Component({
  selector: 'app-vacancy-post',
  templateUrl: './vacancy-post.component.html',
  styleUrls: ['./vacancy-post.component.css']
})
export class VacancyPostComponent implements OnInit {

  vacancyPostForm = new FormGroup({
    departmentName: new FormControl("", [Validators.required]),
    file: new FormControl("", [Validators.required])
  });

  department: Department = {
    departmentId: '',
    departmentName: ''
  };

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

  CourseDepartment: any = ['Informatics and Design - Architectural Technology and Interior Design', 'Informatics and Design - Urban and Regional Planning', 'Informatics and Design - Information Technology', 'Informatics and Design - Applied Design',
    'Informatics and Design - Media', 'Education - Foundation Phase', 'Education - Intermediate Phase', 'Business and Mangement Sciences - Applied Legal studies',
    'Business and Mangement Sciences - Business and Information Administration', 'Business and Mangement Sciences - Hospitality Management', 'Business and Mangement Sciences - Human Resources', 'Business and Mangement Sciences - Marketing',
    'Business and Mangement Sciences - Unit for Applied Economics', 'Business and Mangement Sciences - Tourism and Events Management', 'Business and Mangement Sciences - Sport Management', 'Business and Mangement Sciences - Retail Business Management',
    'Business and Mangement Sciences - Public Administration & Governance', 'Business and Mangement Sciences - Operations Management', 'Business and Mangement Sciences - Management and Project Management', 'Business and Mangement Sciences - Financial Information Systems & Internal Auditing',
    'Business and Mangement Sciences - Financial Accounting and Taxation', 'Business and Mangement Sciences - Entrepreneurship and Business Management', 'Business and Mangement Sciences - Cost and Management Accounting', 'Health and welliness Sciences - Biomedical Sciences',
    'Health and welliness Sciences - Dental Sciences', 'Health and welliness Sciences - Emergency Medical Sciences', 'Health and welliness Sciences - Medical Imaging and Therapeutic Sciences', 'Health and welliness Sciences - Nursing',
    'Health and welliness Sciences - Ophthalmic Sciences', 'Health and welliness Sciences - Welliness Sciences', 'Applied Sciences - Food Technology', 'Engineering & the Built Environment - Construction Management and Quantity Surveying',
    'Engineering & the Built Environment - Chemical Engineering', 'Engineering & the Built Environment - Civil Engineering & Geomatics', 'Engineering & the Built Environment - Clothing & Textile Technology', 'Engineering & the Built Environment - Electrical, Electronic and Computer Engineering',
    'Engineering & the Built Environment - Industrial & Systems Engineering', 'Engineering & the Built Environment - Maritime Studies', 'Engineering & the Built Environment - Mechanical and Mechatronic Engineering'];

  constructor(private toast: ToastrUtility, private vacancyPostService: VacancyService, public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submitVacancyPost() {
    console.log("i must run first"); //use for testing/debugging

    if (this.vacancyPostForm.value.departmentName === "" && this.vacancyPostForm.value.departmentName.indexOf("-1")) {
      this.toast.showtoastrError("Please select a department", "Submission failed");

    } else {
      this.toast.showtoastrSuccess("Vacancy successfully submitted", "Submission sucess");

    }

    this.department.departmentName = this.vacancyPostForm.value.departmentName!;


    this.vacancyDetails(this.vacancy);
    setTimeout(() => {
    }, 1800);

  }

  vacancyDetails(vacancy: Vacancy): void {
    this.vacancyPostService.saveVacancy(vacancy).subscribe({
      error: (error) => {
        this.toast.showtoastrError(error, "Request status");
        console.log(error);
        setTimeout(() => {
        }, 1500);
      },
      complete: () => this.toast.showtoastrSuccess("Save Request Successful.", "Request Status")
    })

  }

  browseVacancyAd(event: any): void {
    event.preventDefault();
    document.getElementById("vacancy-post-ad")?.click();

  }

  selectDepartment(e: any) {
    console.log(e.value)
    this.vacancyPostForm.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get getDepartment() {
    return this.vacancyPostForm.get('departmentName');

  }

}
