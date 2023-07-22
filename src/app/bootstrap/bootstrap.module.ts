import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NgbModalModule,
    NgbDatepickerModule
  ]
})
export class BootstrapModule { }
