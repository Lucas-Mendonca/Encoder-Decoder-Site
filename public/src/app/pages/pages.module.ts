import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DISCLAIMERComponent } from './disclaimer/disclaimer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DISCLAIMERComponent,
    HomeComponent
  ],
  exports:[
    DISCLAIMERComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
