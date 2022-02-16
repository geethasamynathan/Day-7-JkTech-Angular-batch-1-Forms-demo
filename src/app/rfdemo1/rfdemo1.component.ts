import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-rfdemo1',
  templateUrl: './rfdemo1.component.html',
  styleUrls: ['./rfdemo1.component.css']
})
export class RFdemo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
}
