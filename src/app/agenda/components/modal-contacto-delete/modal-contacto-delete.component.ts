import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-modal-contacto-delete',
  templateUrl: './modal-contacto-delete.component.html',
  styleUrls: ['./modal-contacto-delete.component.css']
})
export class ModalContactoDeleteComponent implements OnInit {
  // @Input() nombreContacto:string = ''
  public nombreContacto?: string = ''
  
  constructor(public activeModal: NgbActiveModal, private agendaService: AgendaService) {}

  ngOnInit(): void {
    this.nombreContacto = this.agendaService.currentContactActivated?.nombre
  }



}
