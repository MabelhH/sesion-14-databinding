import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HijoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
     
  ],
  exports:[
    HijoComponent
  ]
})
export class ComponentModule { }
