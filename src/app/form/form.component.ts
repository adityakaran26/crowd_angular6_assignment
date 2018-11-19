import { Component, OnInit } from '@angular/core';


class Registration {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public age: string = '',
    public department: string = 'Select Department',
    public bloodgroup: string = 'Select BloodGroup',
    public address: string = '',
    public phone:number = null,

  ) {}
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

registrations: Registration[] = [];

regModel: Registration;

showNew: Boolean = false;

submitType: string = 'Save';

selectedRow: number;

departments: string[] = ['Tech ', 'Hr ', 'Marketing ', 'Sales '];

bloodgroup: string[] = ['A+', 'B+', 'A-', 'OB+','OB-'];
  object: any;
  retrievedObject: any;
constructor() {
  // default registration data.
  // this.registration
  this.registrations.push(new Registration('Johan', 'Peter', '40',' HR ' ,'A-','kslayout',123432156));
  this.registrations.push(new Registration('Mohamed', 'Tariq', '45',' Tech' ,'B+','hsrlayout',1234567890));
  this.registrations.push(new Registration('Nirmal', 'Kumar', '55','Marketing' ,'OB+','marathalli',707083245));
}

ngOnInit() {}

onNew() {
  // Initiate new registration.
  this.regModel = new Registration();
  // Change submitType to 'Save'.
  this.submitType = 'Save';
  // display registration entry section.
  this.showNew = true;
}


onSave() {
  if (this.submitType === 'Save') {
    // Push registration model object into registration list.
    this.object = this.registrations.push(this.regModel);
    //

    localStorage.setItem("registrationsArray",JSON.stringify(this.object))
   
    this.retrievedObject = localStorage.getItem(this.object);
    

    console.log('typeof retrievedObject: ' + typeof this.retrievedObject);
    console.log('Value of retrievedObject: ' + this.retrievedObject);




  } else {
    // Update the existing properties values based on model.
    this.registrations[this.selectedRow].firstName = this.regModel.firstName;
    this.registrations[this.selectedRow].lastName = this.regModel.lastName;
    this.registrations[this.selectedRow].bloodgroup = this.regModel.bloodgroup;
    this.registrations[this.selectedRow].address = this.regModel.address;
    this.registrations[this.selectedRow].age = this.regModel.age;
    this.registrations[this.selectedRow].phone = this.regModel.phone;
    this.registrations[this.selectedRow].department = this.regModel.department;
  }

  this.showNew = false;
}


onEdit(index: number) {
  // Assign selected table row index.
  this.selectedRow = index;
  // Initiate new registration.
  this.regModel = new Registration();
  // Retrieve selected registration from list and assign to model.
  this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
  // Change submitType to Update.
  this.submitType = 'Update';
 
  this.showNew = true;
}

// This method associate to Delete Button.
onDelete(index: number) {
  // Delete the corresponding registration entry from the list.
  this.registrations.splice(index, 1);
}


onCancel() {
  // Hide registration entry section.
  this.showNew = false;
}


onChangeCountry(dept: string) {
  // Assign corresponding selected department to model.
  this.regModel.department = dept;
}

onChangeBloodgroup(bloodgroup){
  this.regModel.bloodgroup = bloodgroup
}


}
