import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformdemo1',
  templateUrl: './reactiveformdemo1.component.html',
  styleUrls: ['./reactiveformdemo1.component.css']
})
export class Reactiveformdemo1Component implements OnInit {
contactForm;
countrylist:country[];
  constructor() { }

  ngOnInit(): void {
   this.contactForm=new FormGroup({
     firstname:new FormControl(),
     lastname:new FormControl(),
     email :new FormControl(),
     gender:new FormControl(),
     country:new FormControl(),
     isMarried:new FormControl()
   })
this.countrylist=[
  new country("in","India"),
   new country("us","United states"),
   new country("au","Australia")]
  }
  onSubmit()
  {
    console.log('Form submitted')
    console.log(this.contactForm.value);
  }

}

export class country{
  id:string;name:string;
  constructor(id:string, name:string)
  {
    this.id=id;
    this.name=name;

  }
}