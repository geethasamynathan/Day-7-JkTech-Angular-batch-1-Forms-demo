import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FBdemoComponent } from './fbdemo/fbdemo.component';
import { FbuilderComponent } from './fbuilder/fbuilder.component';
import { RFdemo1Component } from './rfdemo1/rfdemo1.component';
import { Rfdemo2Component } from './rfdemo2/rfdemo2.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    FBdemoComponent,
    FbuilderComponent,
    RFdemo1Component,
    Rfdemo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
