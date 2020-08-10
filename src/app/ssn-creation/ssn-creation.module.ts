import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SsnCreationRoutingModule } from './ssn-creation-routing.module';
import { NewssnComponent } from './newssn/newssn.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NewssnComponent],
  imports: [
    CommonModule,
    SsnCreationRoutingModule,
    ReactiveFormsModule
  ]
})
export class SsnCreationModule { }
