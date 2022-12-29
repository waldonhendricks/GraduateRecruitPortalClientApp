import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentListSharerService {

  private selectedFacultyStatus = new BehaviorSubject<Object>({
    facultyName: ""
  });

  currentlySelectedFacultyStatus = this.selectedFacultyStatus.asObservable();

  constructor() { }

  updateSelectedFacultyStatus(facultyTitle: string)
  {
    this.selectedFacultyStatus.next(facultyTitle);
  }
}
