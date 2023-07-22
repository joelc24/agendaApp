import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IContacto } from '../interfaces/contacto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private baseURL: string = environment.baseUrl
  private contactActivated?: IContacto
  constructor(private http: HttpClient) { }


  getContactos(): Observable<IContacto[]>{
    return this.http.get<IContacto[]>(`${this.baseURL}/contactos`)
  }

  
  public get currentContactActivated() : IContacto | undefined {
    if (!this.contactActivated) {
      return undefined
    }
    
    return {...this.contactActivated}
  }

  
  public set activeContact(contacto: IContacto | undefined) {
    this.contactActivated = contacto
  }
  
  
}
