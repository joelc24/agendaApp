import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { IContacto } from '../../interfaces/contacto.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public contactos: IContacto[] = []
 
  constructor(private agendaService: AgendaService) {}
  
  ngOnInit(): void {
    this.agendaService.getContactos()
                      .subscribe(contactos => this.contactos = contactos)
  }

}
