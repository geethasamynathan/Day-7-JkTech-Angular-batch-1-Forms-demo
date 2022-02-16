import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formdemo1',
  templateUrl: './formdemo1.component.html',
  styleUrls: ['./formdemo1.component.css']
})
export class Formdemo1Component implements OnInit {

  constructor() {
    console.log('form loading')
   }

  ngOnInit(): void {
  }
  onSubmit(login)
  {
    console.log('Form Submitted!');
    console.log(login)
  }

}
