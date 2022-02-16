import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-fbdemo',
  templateUrl: './fbdemo.component.html',
  styleUrls: ['./fbdemo.component.css']
})
export class FBdemoComponent implements OnInit {
employeeForm:FormGroup;
submitted = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      fullName: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(10)]],
      email:[''],
      skills:this.fb.group({
        skillName:[''],
        experienceInYears:[''],
        proficiency:['beginner']

      })
    })
    this.employeeForm.get('fullName').valueChanges.subscribe(
      value => {
        console.log(value);
      }
    );
  }
    
  get f(){
    return this.employeeForm.controls;
  }
  get fullName() {
    return this.employeeForm.get('fullName');
  }
 // Subscribe to valueChanges observable
 
 
  // get lastname() {
  //   return this.employeeForm.get('email');
  // }
 
  
  onSubmit()
  {
    console.log(this.employeeForm.value)
  }
  onLoadDataClick()
  {
    this.employeeForm.setValue({
      fullName:'Geetha Samyanthan',
      email:'geethasamynathan2011@gmail.com',
      skills:{
        skillName:"Angular",
        experienceInYears:12,
        proficiency:'beginner'
      }
    });
  }
}
