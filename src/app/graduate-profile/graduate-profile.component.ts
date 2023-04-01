import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Experience } from '../model/experience';
import { Graduate } from '../model/graduate';
import { Qualification } from '../model/qualification';
import { ExperienceService } from '../service/experience.service';
import { GraduateProfileService } from '../service/graduate-profile.service';
import { QualificationService } from '../service/qualification.service';
import { ToastrUtility } from '../utility/toast.utility';
import { requiredFileType } from './file-type';


@Component({
  selector: 'app-graduate-profile',
  templateUrl: './graduate-profile.component.html',
  styleUrls: ['./graduate-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GraduateProfileComponent implements OnInit
{
  private graduateId: string;
  isSouthAfricaSelected: boolean = false;

  graduateDetailsForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
    middleName: new FormControl("", [Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
    lastName: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
    preferredName: new FormControl("", [Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
    secondaryEmail: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]),
    primaryEmail: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@mycput.ac\.za$'), Validators.email]),
    gender: new FormControl("", [Validators.required]),
    license: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    studyPermit: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]),
    confirmPassword: new FormControl("", [Validators.required]),
    cellphone: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),

    //from "Expierience" model class
    jobTitle: new FormControl("", [Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
    companyName: new FormControl("", [Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
    assumedRole: new FormControl("", [Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
    startDate: new FormControl(""),
    endDate: new FormControl(""),

    //from "Qualification model class"
    qualificationName: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
    qualificationDescription: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
    graduateDate: new FormControl("", [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]),

    //upload for documents
    additionalFiles: new FormControl("", [Validators.required]),

  });

  graduate: Graduate = {
    preferredName: '',
    secondaryEmail: '',
    motorVehicleLicense: '',
    country: '',
    cv: {
      cvId: 0,
      documentLocation: "",
      isAcknowledged: false,
      dateAdded: new Date(Date.parse(Date.now().toLocaleString()))
    },
    qualifications: [],
    experiences: [],
    userId: '',
    firstName: '',
    surname: '',
    email: '',
    password: '',
    cellphone: '',
    userRole: ''
  }

  experience: Experience = {
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
    graduateDate: new Date(Date.now()),
    additionalFiles: []

  }

  xpWidgetId: string = "grad-profile-dynamic-fields-widget-id";
  qualificationWidgetId = "grad-profile-qualification-dynamic-fields-widget-id";

  Gender: any = ['Male', 'Female'];

  License: any = ["No", "Yes - Learner's license",
    "Yes - Motor Bike (Code A)",
    "Yes - Code 8 License (Code B)",
    "Yes - Code 10 License (Code C)",
    "Yes - Code 14 License (Code D)"];

  Country: any = ['Algeria (+213)', 'Andorra (+376)', 'Angola (+244)', 'Anguilla (+1264)',
    'Antigua  Barbuda (+1268)', 'Argentina (+54)', 'Armenia (+374)',
    'Aruba (+297)', 'Australia (+61)', 'Austria (+43)', 'Azerbaijan (+994)',
    'Bahamas (+1242)', 'Bahrain (+973)', 'Bangladesh (+880)', 'Barbados (+1246)',
    'Belarus (+375)', 'Belgium (+32)', 'Belize (+501)', 'Benin (+229)',
    'Bermuda (+1441)', 'Bhutan (+975)', 'Bolivia (+591)', 'Bosnia Herzegovina (+387)',
    'Botswana (+267)', 'Brazil (+55)', 'Brunei (+673)', 'Bulgaria (+359)',
    'Burkina Faso (+226)', 'Burundi (+257)', 'Cambodia (+855)', 'Cameroon (+237)',
    'Canada (+1)', 'Cape Verde Islands (+238)', 'Cayman Islands (+1345)', 'Central African Republic (+236)',
    'Chile (+56)', 'China (+86)', 'Colombia (+57)', 'Comoros (+269)',
    'Congo (+242)', 'Cook Islands (+682)', 'Costa Rica (+506)', 'Croatia (+385)',
    'Cuba (+53)', 'Cyprus North (+90392)', 'Cyprus South (+357)', 'Czech Republic (+42)',
    'Denmark (+45)', 'Djibouti (+253)', 'Dominica (+1809)', 'Dominican Republic (+1809)',
    'Ecuador (+593)', 'Egypt (+20)', 'El Salvador (+503)', 'Equatorial Guinea (+240)',
    'Eritrea (+291)', 'Estonia (+372)', 'Ethiopia (+251)', 'Falkland Islands (+500)',
    'Faroe Islands (+298)', 'Fiji (+679)', 'Finland (+358)', 'France (+33)',
    'French Guiana (+594)', 'French Polynesia (+689)', 'Gabon (+241)', 'Gambia (+220)',
    'Georgia (+7880)', 'Germany (+49)', 'Ghana (+233)', 'Gibraltar (+350)',
    'Greece (+30)', 'Greenland (+299)', 'Grenada (+1473)', 'Guadeloupe (+590)',
    'Guam (+671)', 'Guatemala (+502)', 'Guinea (+224)', 'Guinea - Bissau (+245)',
    'Guyana (+592)', 'Haiti (+509)', 'Honduras (+504)', 'Hong Kong (+852)',
    'Hungary (+36)', 'Iceland (+354)', 'India (+91)', 'Indonesia (+62)',
    'Iran (+98)', 'Iraq (+964)', 'Ireland (+353)', 'Israel (+972)',
    'Italy (+39)', 'Jamaica (+1876)', 'Japan (+81)', 'Jordan (+962)',
    'Kazakhstan (+7)', 'Kenya (+254)', 'Kiribati (+686)', 'Korea North (+850)',
    'Korea South (+82)', 'Kuwait (+965)', 'Kyrgyzstan (+996)', 'Laos (+856)',
    'Latvia (+371)', 'Lebanon (+961)', 'Lesotho (+266)', 'Liberia (+231)',
    'Libya (+218)', 'Liechtenstein (+417)', 'Lithuania (+370)', 'Luxembourg (+352)',
    'Macao (+853)', 'Macedonia (+389)', 'Madagascar (+261)', 'Malawi (+265)',
    'Malaysia (+60)', 'Maldives (+960)', 'Mali (+223)', 'Malta (+356)',
    'Marshall Islands (+692)', 'Martinique (+596)', 'Mauritania (+222)', 'Mayotte (+269)',
    'Mexico (+52)', 'Micronesia (+691)', 'Moldova (+373)', 'Monaco (+377)',
    'Mongolia (+976)', 'Montserrat (+1664)', 'Morocco (+212)', 'Mozambique (+258)',
    'Myanmar (+95)', 'Namibia (+264)', 'Nauru (+674)', 'Nepal (+977)',
    'Netherlands (+31)', 'New Caledonia (+687)', 'New Zealand (+64)', 'Nicaragua (+505)',
    'Niger (+227)', 'Nigeria (+234)', 'Niue (+683)', 'Norfolk Islands (+672)',
    'Northern Marianas (+670)', 'Norway (+47)', 'Oman (+968)', 'Palau (+680)',
    'Panama (+507)', 'Papua New Guinea (+675)', 'Paraguay (+595)', 'Peru (+51)',
    'Philippines (+63)', 'Poland (+48)', 'Portugal (+351)', 'Puerto Rico (+1787)',
    'Qatar (+974)', 'Reunion (+262)', 'Romania (+40)', 'Russia (+7)',
    'Rwanda (+250)', 'San Marino (+378)', 'Sao Tome  Principe (+239)', 'Saudi Arabia (+966)',
    'Senegal (+221)', 'Serbia (+381)', 'Seychelles (+248)', 'Sierra Leone (+232)',
    'Singapore (+65)', 'Slovak Republic (+421)', 'Slovenia (+386)', 'Solomon Islands (+677)',
    'Somalia (+252)', 'South Africa (+27)', 'Spain (+34)', 'Sri Lanka (+94)',
    'St. Helena (+290)', 'St. Kitts (+1869)', 'St. Lucia (+1758)', 'Sudan (+249)',
    'Suriname (+597)', 'Swaziland (+268)', 'Sweden (+46)', 'Switzerland (+41)',
    'Syria (+963)', 'Taiwan (+886)', 'Tajikstan (+7)', 'Thailand (+66)',
    'Togo (+228)', 'Tonga (+676)', 'Trinidad  Tobago (+1868)', 'Tunisia (+216)',
    'Turkey (+90)', 'Turkmenistan (+7)', 'Turkmenistan (+993)', 'Turks  Caicos Islands (+1649)',
    'Tuvalu (+688)', 'Uganda (+256)', 'UK (+44)', 'Ukraine (+380)',
    'United Arab Emirates (+971)', 'Uruguay (+598)', 'USA (+1)', 'Uzbekistan (+7)',
    'Vanuatu (+678)', 'Vatican City (+379)', 'Venezuela (+58)', 'Vietnam (+84)',
    'Virgin Islands - British (+1284)', 'Virgin Islands - US (+1340)', 'Wallis  Futuna (+681)', 'Yemen (North)(+969)',
    'Yemen (South)(+967)', 'Zambia (+260)', 'Zimbabwe (+263)'];

  StudyPermit: any = ['Yes', 'No'];

  constructor (public formBuilder: FormBuilder, private graduateService: GraduateProfileService,
    private experienceService: ExperienceService, private qualificationService: QualificationService,
    private toast: ToastrUtility, private cookieService: CookieService)
  {
    this.graduateId = "";
  }

  ngOnInit(): void
  {
    this.graduateId = this.cookieService.get('GRAD_PORTAL_USER-ID');
    this.getGraduate(this.graduateId);
    setTimeout(() => {
      console.log(this.graduate);
      this.populateGraduateFormFields();
    }, 3000);
  }

  submitGraduateDetails()
  {
    this.graduate.firstName = this.graduateDetailsForm.value.firstName!;
    this.graduate.preferredName = this.graduateDetailsForm.value.preferredName!;
    this.graduate.surname =  this.graduateDetailsForm.value.lastName!;
    this.graduate.email =  this.graduateDetailsForm.value.primaryEmail!;
    this.graduate.secondaryEmail = this.graduateDetailsForm.value.secondaryEmail!;
    this.graduate.cellphone =  this.graduateDetailsForm.value.cellphone!;
    this.graduate.motorVehicleLicense = this.graduateDetailsForm.value.license!;
    this.graduate.country = this.graduateDetailsForm.value.country!;

    this.saveGraduateDetails(this.graduate);
    setTimeout(() =>
    {
    }, 2500);
    this.toast.showtoastrSuccess("Graduate details successfully submitted", "Submission success");
  }

  setActiveCountry(country: any): void
  {
    (country === "173: South Africa (+27)") 
    ? this.isSouthAfricaSelected = true 
    : this.isSouthAfricaSelected = false;
  }
  
  // Choose gender using select dropdown
  changeGender(e: any)
  {
    console.log(e.value)
    this.graduateDetailsForm.setValue(e.target.value, {
      onlySelf: true
    })
  }

  //get gender when user selects it
  get genderType()
  {
    return this.graduateDetailsForm.get('gender');

  }

  // Choose license using select dropdown
  selectLicense(e: any)
  {
    console.log(e.value)
    this.graduateDetailsForm.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get licenseType()
  {
    return this.graduateDetailsForm.get('license');
  }

  selectCountry(e: any)
  {
    console.log(e.value)
    this.graduateDetailsForm.setValue(e.target.value, {
      onlySelf: true
    })
  }

  //get the selected country
  get country()
  {
    return this.graduateDetailsForm.get('country');
  }

  selectStudyPermit(e: any)
  {
    console.log(e.value)
    this.graduateDetailsForm.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get studyPermit()
  {
    return this.graduateDetailsForm.get('studyPermit');
  }

  getGraduate(graduateId: string): void
  {
    this.graduateService.getGraduate(graduateId).subscribe(
    {
      next: (response: Graduate) => {
        this.graduate = response;
      },

      error: (errorResponse: any) => {
        this.toast.showtoastrError(errorResponse.error.error, "Request status");
        setTimeout(() => {
        }, 2000);
      },
    });
  }

  //personal information of the graduate
  saveGraduateDetails(graduateProfile: Graduate): void
  {
    this.graduateService.save(graduateProfile).subscribe({
      error: (error) =>
      {
        this.toast.showtoastrError(error, "Request status");
        console.log(error);
        setTimeout(() =>
        {
        }, 1500);
      },

      complete: () => this.toast.showtoastrSuccess("Save Request Successful.", "Request Status")
    });
  }

  //work experience details of graduate
  graduateWorkExperience(workExperience: Experience): void
  {
    this.experienceService.addExperience(workExperience).subscribe({
      error: (error) =>
      {
        this.toast.showtoastrError(error, "Request status");
        console.log(error);
        setTimeout(() =>
        {
        }, 1500);
      },
      complete: () => this.toast.showtoastrSuccess("Save Request Successful.", "Request Status")
    });
  }

  graduateQualification(graduateQualification: Qualification): void
  {
    this.qualificationService.addQualification(graduateQualification).subscribe({
      error: (error) =>
      {
        this.toast.showtoastrError(error, "Request status");
        console.log(error);
        setTimeout(() =>
        {
        }, 1500);
      },
      complete: () => this.toast.showtoastrSuccess("Save Request Successful.", "Request Status")
    })

  }

  browseResume(event: any): void
  {
    event.preventDefault();
    document.getElementById("resumé")?.click();
  }

  browseId(event: any): void
  {
    event.preventDefault();
    document.getElementById("idDocument")?.click();
  }

  browseAcademicRecord(event: any): void
  {
    event.preventDefault();
    document.getElementById("academicRecord")?.click();

  }

  browseMatricResults(event: any): void
  {
    event.preventDefault();
    document.getElementById("matricResults")?.click();
  }

  browsePermit(event: any): void
  {
    event.preventDefault();
    document.getElementById("studyPermit")?.click();

  }

  populateGraduateFormFields()
  {
    this.graduateDetailsForm.setValue({
      firstName: this.graduate.firstName,
      lastName: this.graduate.surname,
      preferredName: this.graduate.preferredName,
      secondaryEmail: this.graduate.secondaryEmail,
      primaryEmail: this.graduate.email,
      license: this.graduate.motorVehicleLicense,
      country: this.graduate.country,
      cellphone: this.graduate.cellphone,
      jobTitle: "",
      companyName: "",
      assumedRole: "",
      startDate: "",
      endDate: "",
      qualificationName: "",
      qualificationDescription: "",
      graduateDate: Date.now.toString(),
      middleName: null,
      gender: null,
      studyPermit: null,
      password: null,
      confirmPassword: null,
      additionalFiles: null
    });
  }

  removeQualificationFormSection(event: any): void
  {
    // Prevents the default behaviour of the button
    event.preventDefault();

    // Stops event bubbling.
    event.stopImmediatePropagation();

    // Check if the click event occured from the button 
    if (event.target.tagName === "button".toUpperCase())
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
      let parentDiv = document.getElementById(`${this.qualificationWidgetId}-${idNumberOfTheButton}`);
      parentDiv?.remove();

      // SEE LINE 149
    }
    else if (event.target.tagName === "i".toUpperCase())
    {
      let button: HTMLElement = event.srcElement.parentElement;
      let idNumberOfTheButton: string = button.id.charAt(button.id.length - 1);
      let parentDiv = document.getElementById(`${this.qualificationWidgetId}-${idNumberOfTheButton}`);
      parentDiv?.remove();
    }
  }

  removeExperieceFormSection(event: any): void
  {
    // Prevents the default behaviour of the button
    event.preventDefault();

    // Stops event bubbling.
    event.stopImmediatePropagation();

    // Check if the click event occured from the button 
    if (event.target.tagName === "button".toUpperCase())
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
    else if (event.target.tagName === "i".toUpperCase())
    {
      let button: HTMLElement = event.srcElement.parentElement;
      let idNumberOfTheButton: string = button.id.charAt(button.id.length - 1);
      let parentDiv = document.getElementById(`${this.xpWidgetId}-${idNumberOfTheButton}`);
      parentDiv?.remove();
    }

  }

  addMoreWorkExperience(event: any): void
  {
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

  addMoreQualifications(event: any): void
  {
    event.preventDefault();
    const dynamicWidgetParent = document.getElementById("grad-profile-dynamic-qualification-fields-wrapper-id");

    let div = document.createElement("div");
    div.setAttribute("class", "grad-profile-dynamic-fields-widget");
    div.setAttribute("id", `grad-profile-qualification-dynamic-fields-widget-id-${dynamicWidgetParent?.childElementCount as number + 1}`);


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
    thirdRowRightColumnDiv.setAttribute("class", "col grad-profile-inputs-widget");
    thirdRowRightColumnDiv.setAttribute("style", "margin-bottom: 4vh");



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
    binButton.setAttribute("id", `grad-profile-qualification-dynamic-fields-widget-id-btn-${dynamicWidgetParent?.childElementCount as number + 1}`);
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

}


