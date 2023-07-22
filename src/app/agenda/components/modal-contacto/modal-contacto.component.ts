import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { correctLength } from '../../validators/corectLength';
import { IContacto } from '../../interfaces/contacto.interface';
import { ModalContactoDeleteComponent } from '../modal-contacto-delete/modal-contacto-delete.component';
import { AgendaService } from '../../services/agenda.service';



@Component({
  selector: 'app-modal-contacto',
  templateUrl: './modal-contacto.component.html',
  styleUrls: ['./modal-contacto.component.css']
})
export class ModalContactoComponent implements OnInit {
	@Input() title:string = 'Agregar Contacto'

	contactoForm: FormGroup = this.fb.group({
		nombre: ['', [Validators.required, Validators.minLength(3)]],
		numero: ['', [Validators.required, correctLength(10)]]
	})

	constructor(
		public activeModal: NgbActiveModal, 
		private fb: FormBuilder, 
		private modalService: NgbModal,
		private agendaService: AgendaService
	) {}
	
	ngOnInit(): void {
		if (this.agendaService.currentContactActivated) {
			this.contactoForm.reset(this.agendaService.currentContactActivated)
		}
	}
	
	
	formError(control:string) {
		return this.contactoForm.get(control)?.invalid 
					&& this.contactoForm.get(control)?.touched
	}
	
	delete(){
		const modalRef = this.modalService.open(ModalContactoDeleteComponent, { size: 'lg' })
		modalRef.closed.subscribe(()=>{
			this.agendaService.activeContact = undefined
		})
	}

	
}
