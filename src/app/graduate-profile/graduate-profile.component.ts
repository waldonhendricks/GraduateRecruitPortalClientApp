import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Experiecnce } from '../model/experience';
import { GraduateProfile } from '../model/graduate';
import { Qualification } from '../model/qualification';
import { ExperienceService } from '../service/experience.service';
import { GraduateProfileService } from '../service/graduate-profile.service';
import { QualificationService } from '../service/qualification.service';

@Component({
  selector: 'app-graduate-profile',
  templateUrl: './graduate-profile.component.html',
  styleUrls: ['./graduate-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GraduateProfileComponent implements OnInit {
  
  graduateDetailsForm = new FormGroup({
    firstName: new FormControl(""),
    middleName: new FormControl(""),
    lastName: new FormGroup(""),
    preferredName: new FormGroup(""),
    secondaryEmail: new FormGroup(""),
    primaryEmail: new FormGroup(""),
    gender: new FormGroup(""),
    license: new FormGroup(""),
    country: new FormGroup(""),
    studyPermit: new FormGroup(""),
    password: new FormGroup(""),
    confirmPassword: new FormGroup(""),
    cellphone: new FormGroup(""),

    //from "Expierience" model class
    jobTitle: new FormControl(""),
    assumedRole: new FormControl(""),
    startDate: new FormControl(""),
    endDate: new FormControl(""),

      //from "Qualification model class"
    qualificationName: new FormControl(""),
    qualificationDescription: new FormControl(""),
    graduateDate: new FormControl("")

  });

  graduateProfile: GraduateProfile = {
    firstName:'',
    middleName: '',
    lastName: '',
    preferredName: '',
    secondaryEmail: '',
    primaryEmail: '',
    gender: '',
    license: true,
    country: '',
    studyPermit: true,
    password: '',
    confirmPassword: '',
    cellphone: '',

  }

  experience: Experiecnce = {
    experienceId: 0,
    jobTitle: '',
    assumedRole: '',
    startDate: '',
    endDate: '', 
  }

  qualification: Qualification = {
    qualificationId: 0,
    qualificationName: '',
    qualificationDescription: '',
    graduateDate: new Date(Date.now())
    
  }

  xpWidgetId: string = "grad-profile-dynamic-fields-widget-id";
  constructor(private graduateProfileService: GraduateProfileService,private experienceService: ExperienceService, private qualificationService: QualificationService) {

  }
  ngOnInit(): void {
  }

  submitGraduateDetails(){
    //Demi, you must code here
  }

  browseResume(event: any): void {
    event.preventDefault();
    document.getElementById("resumé")?.click();
  }
  removeQualificationFormSection(event: any): void{
    // Prevents the default behaviour of the button
    event.preventDefault();

    // Stops event bubbling.
    event.stopImmediatePropagation();

    // Check if the click event occured from the button 
    if(event.target.tagName === "button".toUpperCase())
    {
      /** 
       * Get the id number from the button's id which is equivalent to the id
       * numuber of it outter parent element (div)
       *  */ 
      let idNumberOfTheButton: number = event.target.id.charAt(event.target.id.length - 1);
      
      /**
       * Get the outter parent div which folds all of the form input fields
       * using the div's id concatinated with the number of the div.
       */
      let parentDiv = document.getElementById(`${this.xpWidgetId}-${idNumberOfTheButton}`);
      parentDiv?.remove();

      // SEE LINE 149
    }
    else if(event.target.tagName === "i".toUpperCase())
    {
      let button: HTMLElement = event.srcElement.parentElement;
      let idNumberOfTheButton: string = button.id.charAt(button.id.length - 1);
      let parentDiv = document.getElementById(`${this.xpWidgetId}-${idNumberOfTheButton}`);
      parentDiv?.remove();
    }
  }

  removeExperieceFormSection(event: any): void{
    // Prevents the default behaviour of the button
    event.preventDefault();

    // Stops event bubbling.
    event.stopImmediatePropagation();

    // Check if the click event occured from the button 
    if(event.target.tagName === "button".toUpperCase())
    {
      /** 
       * Get the id number from the button's id which is equivalent to the id
       * numuber of it outter parent element (div)
       *  */ 
      let idNumberOfTheButton: number = event.target.id.charAt(event.target.id.length - 1);
      
      /**
       * Get the outter parent div which folds all of the form input fields
       * using the div's id concatinated with the number of the div.
       */
      let parentDiv = document.getElementById(`${this.xpWidgetId}-${idNumberOfTheButton}`);
      parentDiv?.remove();

      // SEE LINE 149
    }
    else if(event.target.tagName === "i".toUpperCase())
    {
      let button: HTMLElement = event.srcElement.parentElement;
      let idNumberOfTheButton: string = button.id.charAt(button.id.length - 1);
      let parentDiv = document.getElementById(`${this.xpWidgetId}-${idNumberOfTheButton}`);
      parentDiv?.remove();
    }
  
  }
  addMoreWorkExperience(event: any): void {
    event.preventDefault();
    
    const dynamicWidgetParent = document.getElementById("grad-profile-dynamic-fields-wrapper-id");
    let div = document.createElement("div");
    div.setAttribute("class", "grad-profile-dynamic-fields-widget");

    div.setAttribute("id", `grad-profile-dynamic-fields-widget-id-${dynamicWidgetParent?.childElementCount as number + 1}`);

    // Create Row Div for form input fields.
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");

    let secondRowDiv = document.createElement("div");
    secondRowDiv.setAttribute("class", "row");

    let thirdRowDiv = document.createElement("div");
    thirdRowDiv.setAttribute("class", "row");

    /**
     * Create Col div that will hold the input fields then 
     * this div will go inside of the row div.
     * */
    let firstRowLeftColumnDiv = document.createElement("div");
    firstRowLeftColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");

    let secondRowleftColumnDiv = document.createElement("div");
    secondRowleftColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");

    let thirdRowleftColumnDiv = document.createElement("div");
    thirdRowleftColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");

    let firstRowRightColumnDiv = document.createElement("div");
    firstRowRightColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");

    let secondRowRightColumnDiv = document.createElement("div");
    secondRowRightColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");

    let thirdRightRowColumnDiv = document.createElement("div");
    thirdRightRowColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");

    // Left Column elements labels, & inputs.

    //Job Title
    let jobTitleLabel = document.createElement("label");
    jobTitleLabel.setAttribute("for", "jobTitle");
    jobTitleLabel.append("Job Title");

    let jobTitleInputField = document.createElement("input");
    jobTitleInputField.setAttribute("type", "text");
    jobTitleInputField.setAttribute("class", "form-control");
    jobTitleInputField.setAttribute("aria-label", "Job title");

    //Company Name
    let companyNameLabel = document.createElement("label");
    companyNameLabel.setAttribute("for", "companyName");
    companyNameLabel.append("Company Name");

    let companyNameInputField = document.createElement("input");
    companyNameInputField.setAttribute("type", "text");
    companyNameInputField.setAttribute("class", "form-control");
    companyNameInputField.setAttribute("aria-label", "Company Name");

    //End Date
    let endDateLabel = document.createElement("label");
    endDateLabel.setAttribute("for", "endDate");
    endDateLabel.append("End Date");

    let endDateInputField = document.createElement("input");
    endDateInputField.setAttribute("date", "text");
    endDateInputField.setAttribute("class", "form-control");
    endDateInputField.setAttribute("aria-label", "End date");

    // Right Column elements labels, & inputs.

    // Assumed Role
    let assumedRoleLabel = document.createElement("label");
    assumedRoleLabel.setAttribute("for", "assumedRole");
    assumedRoleLabel.append("Assumed Role");

    let assumedRoleInputField = document.createElement("input");
    assumedRoleInputField.setAttribute("type", "text");
    assumedRoleInputField.setAttribute("class", "form-control");
    assumedRoleInputField.setAttribute("aria-label", "Assumed role");

    // Start Date
    let startDateLabel = document.createElement("label");
    startDateLabel.setAttribute("for", "stateDate");
    startDateLabel.append("Start Date");

    let startDateInputField = document.createElement("input");
    startDateInputField.setAttribute("type", "date");
    startDateInputField.setAttribute("class", "form-control");
    startDateInputField.setAttribute("aria-label", "Start date");

    // Button for removing the form input field's section.
    let binButton = document.createElement("button");
    binButton.setAttribute("class", "removeXpFormSectionBtn");
    binButton.setAttribute("id", `grad-profile-dynamic-fields-widget-id-btn-${dynamicWidgetParent?.childElementCount as number + 1}`);
    binButton.addEventListener("click", this.removeExperieceFormSection.bind(this));

    // Icon for the button.
    let binIconElement = document.createElement("i");
    binIconElement.setAttribute("class", "fa fa-trash");
    binButton.appendChild(binIconElement);




    //Append left column elements to the leftColumnDiv
    firstRowLeftColumnDiv.appendChild(jobTitleLabel);
    firstRowLeftColumnDiv.appendChild(jobTitleInputField);
    secondRowleftColumnDiv.appendChild(companyNameLabel);
    secondRowleftColumnDiv.appendChild(companyNameInputField);
    thirdRowleftColumnDiv.appendChild(endDateLabel);
    thirdRowleftColumnDiv.appendChild(endDateInputField);


    //Append right column elements to the leftColumnDiv
    firstRowRightColumnDiv.appendChild(assumedRoleLabel);
    firstRowRightColumnDiv.appendChild(assumedRoleInputField);
    secondRowRightColumnDiv.appendChild(startDateLabel);
    secondRowRightColumnDiv.appendChild(startDateInputField);
    thirdRightRowColumnDiv.appendChild(binButton);


    //Append the column divs to the row.
    rowDiv.appendChild(firstRowLeftColumnDiv);
    rowDiv.appendChild(firstRowRightColumnDiv);

    secondRowDiv.appendChild(secondRowleftColumnDiv);
    secondRowDiv.appendChild(secondRowRightColumnDiv);

    thirdRowDiv.appendChild(thirdRowleftColumnDiv);
    thirdRowDiv.appendChild(thirdRightRowColumnDiv);

    //Append the the row to the div.
    div.appendChild(rowDiv);
    div.appendChild(secondRowDiv);
    div.appendChild(thirdRowDiv);

    //Append the div to the parent. 
    dynamicWidgetParent?.appendChild(div);
  
  }
  addMoreQualifications(event: any): void {
    event.preventDefault();
    const dynamicWidgetParent = document.getElementById("grad-profile-dynamic-qualification-fields-wrapper-id");

    let div = document.createElement("div");
    div.setAttribute("class", "grad-profile-dynamic-fields-widget");

    let qualRowDiv1 = document.createElement("div");
    qualRowDiv1.setAttribute("class", "row");

    let qualRowDiv2 = document.createElement("div");
    qualRowDiv2.setAttribute("class", "row");

    let qualRowDiv3 = document.createElement("div");
    qualRowDiv3.setAttribute("class", "row");

    // Columns for the qualification
    let firstRowLeftColumnDiv = document.createElement("div");
    firstRowLeftColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");
    firstRowLeftColumnDiv.setAttribute("style", "margin-bottom: 4vh");

    let secondRowRightColumnDiv = document.createElement("div");
    secondRowRightColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");
    secondRowRightColumnDiv.setAttribute("style", "margin-bottom: 4vh");

    let thirdRowleftColumnDiv = document.createElement("div");
    thirdRowleftColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");
    thirdRowleftColumnDiv.setAttribute("style", "margin-bottom: 4vh");

    let thirdRowRightColumnDiv = document.createElement("div");
    thirdRowRightColumnDiv.setAttribute("class","col grad-profile-inputs-widget");
    thirdRowRightColumnDiv.setAttribute("style","margin-bottom: 4vh");

  

    //Qualification Name
    let qualificationNameLabel = document.createElement("label");
    qualificationNameLabel.setAttribute("for", "qualificationName");
    qualificationNameLabel.append("Qualification Name");

    let qualificationNameInput = document.createElement("input");
    qualificationNameInput.setAttribute("type", "text");
    qualificationNameInput.setAttribute("class", "form-control");
    qualificationNameInput.setAttribute("aria-label", "Qualification Name");

    //Qualification Description
    let qualificationDescriptionLabel = document.createElement("label");
    qualificationDescriptionLabel.setAttribute("for", "qualificationDescription");
    qualificationDescriptionLabel.append("Qualification Description");

    let qualificationDescriptionInput = document.createElement("input");
    qualificationDescriptionInput.setAttribute("type", "text");
    qualificationDescriptionInput.setAttribute("class", "form-control");
    qualificationDescriptionInput.setAttribute("aria-label", "Qualification Description");

    //Year Obtained
    let yearObtainedLabel = document.createElement("label");
    yearObtainedLabel.setAttribute("for", "yearObtained");
    yearObtainedLabel.append("Year Obtained");

    let yearObtainedInput = document.createElement("input");
    yearObtainedInput.setAttribute("type", "text");
    yearObtainedInput.setAttribute("class", "form-control");
    yearObtainedInput.setAttribute("aria-label", "Year Obtained");

    //remove button
    let binButton = document.createElement("button");
    binButton.setAttribute("class", "removeXpFormSectionBtn");
    binButton.setAttribute("id", `grad-profile-dynamic-fields-widget-id-btn-${dynamicWidgetParent?.childElementCount as number + 1}`);
    binButton.addEventListener("click", this.removeQualificationFormSection.bind(this));

    // Icon for the button.
    let binIconElement = document.createElement("i");
    binIconElement.setAttribute("class", "fa fa-trash");
    binButton.appendChild(binIconElement);

    firstRowLeftColumnDiv.appendChild(qualificationNameLabel);
    firstRowLeftColumnDiv.appendChild(qualificationNameInput);
    secondRowRightColumnDiv.appendChild(qualificationDescriptionLabel);
    secondRowRightColumnDiv.appendChild(qualificationDescriptionInput);
    thirdRowleftColumnDiv.appendChild(yearObtainedLabel);
    thirdRowleftColumnDiv.appendChild(yearObtainedInput);
    thirdRowRightColumnDiv.appendChild(binButton);

    qualRowDiv1.appendChild(firstRowLeftColumnDiv);
    qualRowDiv1.appendChild(secondRowRightColumnDiv);
    qualRowDiv3.appendChild(thirdRowleftColumnDiv);
    qualRowDiv3.appendChild(thirdRowRightColumnDiv);

    div.appendChild(qualRowDiv1);
    div.appendChild(qualRowDiv2);
    div.appendChild(qualRowDiv3);

    dynamicWidgetParent?.appendChild(div);

  }

  specifyLicense(event: any): void{
  //  var selectedOption = event.options[event.selectedIndex].value;
  //  var yesOption = document.getElementById("optionYes");
   
  //  yesOption?.ariaDisabled = selectedOption == "yes" ? false : true;

  //  if(!yesOption?.ariaDisabled){
  //   yesOption?.focus();

   }

}
