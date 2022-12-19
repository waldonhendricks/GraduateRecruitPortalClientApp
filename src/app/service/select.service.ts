import { Injectable } from '@angular/core';
import { Department } from '../model/department';
import { Course } from '../model/course';

@Injectable()
export class SelectService {

  getDepartments() {
    return [
     new Department(1, 'Applied Sciences' ),
     new Department(2, 'Business & Management Sciences' ),
     new Department(3, 'Education' ),
     new Department(4, 'Engingeering & the Built Enviroment' ),
     new Department(5, 'Health & Wellness Sciences' ),
     new Department(6, 'Informatics & Design' ),
    ];
  }
  
  getCourses() {
   return [
     new Course(1, 1, 'Agriculture' ),
     new Course(2, 1, 'Biotechnology and Consumer Science' ),
     new Course(3, 1, 'Chemistry'),
     new Course(4, 1, 'Convervation and Marine Sciences'),
     new Course(5, 1, 'Enviromental and Occupational Studies' ),
     new Course(6, 1, 'Food Technology'),
     new Course(7, 1, 'Horticutural Sciences' ),
     new Course(8, 1, 'Mathematics and Physics' ),


     new Course(9, 2, 'Applied Legal Studies'),
     new Course(10, 2, 'Business and Information' ),
     new Course(11, 2, 'Hospitality Management' ),
     new Course(12, 2, 'Cost and Management Accounting'),
     new Course(13, 2, 'Entrepreneurship and Business Management' ),
     new Course(14, 2, 'Financial Accounting and Taxation' ),
     new Course(15, 2, 'Management and Project Management'),
     new Course(16, 2, 'Marketing' ),
     new Course(17, 2, 'Operations Management' ),
     new Course(18, 2, 'Public Administration and Governance'),
     new Course(19, 2, 'Retail Business Management' ),
     new Course(20, 2, 'Sport Mangement' ),
     new Course(21, 2, 'Tourism and Events Management'),
     new Course(22, 2, 'Unit for Applied Economics' ),


     new Course(23, 3, 'Department for Foundation Phase Studies' ),
     new Course(24, 3, 'Department for Intermediate Phase Studies'),
     new Course(25, 3, 'Department of Senior and Further Education and Training Phase' ),
     new Course(26, 3, 'Department of Teacher Professional Development' ),
     new Course(27, 3, 'Department of Research and Postgraduate Studies' ),

     new Course(28, 4, 'Construction Managemtn and Quantity Surveying'),
     new Course(29, 4, 'Chemical Engineering' ),
     new Course(30, 4, 'Civil Engineering & Geomatics' ),
     new Course(31, 4, 'Clothing & Textile Technology' ),
     new Course(33, 4, 'Electrical,Electronic and Computer Engineering'),
     new Course(34, 4, 'Industrial & Systems Engineering' ),
     new Course(35, 4, 'Maritime Studies' ),
     new Course(36, 4, 'Mechanical and Mechatronics Engingeering' ),


     new Course(37, 5, 'Biomedical Sciences'),
     new Course(38, 5, 'Dental Sciences' ),
     new Course(39, 5, 'Emergency Medical Sciences'),
     new Course(40, 5, 'Medical Imaging and Therapeutic Sciences' ),
     new Course(41, 5, 'Nursing'),
     new Course(42, 5, 'Ophthalmic Sciences' ),
     new Course(43, 5, 'Wellness Sciences'),


     new Course(44, 6, 'Architectural Technology and Interior Design' ),
     new Course(45, 6, 'Urban and Regional Planning'),
     new Course(46, 6, 'Information Technology' ),
     new Course(47, 6, 'Applied Design'),
     new Course(48, 6, 'Media' ),
     
    ];
  }

}
