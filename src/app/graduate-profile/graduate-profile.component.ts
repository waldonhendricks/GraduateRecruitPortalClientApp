import { Component } from '@angular/core';

@Component({
  selector: 'app-graduate-profile',
  templateUrl: './graduate-profile.component.html',
  styleUrls: ['./graduate-profile.component.css']
})
export class GraduateProfileComponent {

  constructor()
  {

  }

  browseResume(event: any): void 
  {
    event.preventDefault();
    document.getElementById("resumé")?.click();
  }

  addMoreWorkExperience(event: any): void
  {
    event.preventDefault();
    const dynamicWidgetParent = document.getElementById("grad-profile-dynamic-fields-wrapper-id");
    let div = document.createElement("div");
    div.setAttribute("class", "grad-profile-dynamic-fields-widget");

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
    firstRowLeftColumnDiv.setAttribute("style", "margin-bottom: 4vh;");

    let secondRowleftColumnDiv = document.createElement("div");
    secondRowleftColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");
    secondRowleftColumnDiv.setAttribute("style", "margin-bottom: 4vh;");

    let thirdRowleftColumnDiv = document.createElement("div");
    thirdRowleftColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");
    thirdRowleftColumnDiv.setAttribute("style", "margin-bottom: 4vh;");

    let firstRowRightColumnDiv = document.createElement("div");
    firstRowRightColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");
    firstRowRightColumnDiv.setAttribute("style", "margin-bottom: 4vh;");

    let secondRowRightColumnDiv = document.createElement("div");
    secondRowRightColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");
    secondRowRightColumnDiv.setAttribute("style", "margin-bottom: 4vh;");
    
    let thirdRightRowColumnDiv = document.createElement("div");
    thirdRightRowColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");
    thirdRightRowColumnDiv.setAttribute("style", "margin-bottom: 4vh;");

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

  
}
