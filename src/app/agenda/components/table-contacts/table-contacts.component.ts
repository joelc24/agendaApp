import { Component, Input } from '@angular/core';
import { IContacto } from '../../interfaces/contacto.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContactoComponent } from '../modal-contacto/modal-contacto.component';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-table-contacts',
  templateUrl: './table-contacts.component.html',
  styleUrls: ['./table-contacts.component.css']
})
export class TableContactsComponent {
  @Input() contactos: IContacto[] = []


  
  constructor(private modalService: NgbModal, private agendaService: AgendaService) {
   
  }

  open(){
    const modalRef = this.modalService.open(ModalContactoComponent)

    modalRef.closed.subscribe(()=>{
      console.log('hello')
      this.agendaService.activeContact = undefined
    })
  }

  openEdit(contacto:IContacto){
    const modalRef = this.modalService.open(ModalContactoComponent)
    modalRef.componentInstance.title = 'Editar Contacto'
    this.agendaService.activeContact = contacto

    modalRef.closed.subscribe(()=>{
      console.log('hello')
      this.agendaService.activeContact = undefined
    })
  }
}
