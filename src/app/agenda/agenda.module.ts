import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaLayoutComponent } from './layout/agenda-layout/agenda-layout.component';
import { SharedModule } from '../shared/shared.module';
import { TableContactsComponent } from './components/table-contacts/table-contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalContactoComponent } from './components/modal-contacto/modal-contacto.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { ModalContactoDeleteComponent } from './components/modal-contacto-delete/modal-contacto-delete.component';


@NgModule({
  declarations: [
    AgendaLayoutComponent,
    TableContactsComponent,
    HomeComponent,
    ModalContactoComponent,
    ModalContactoDeleteComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BootstrapModule
  ]
})
export class AgendaModule { }
