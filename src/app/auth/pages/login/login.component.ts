import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public myForm: FormGroup = this.fb.group({
    correo: ['',[Validators.required, Validators.email]],
    contraseña: ['', [Validators.required,Validators.minLength(4)]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}


  login(): void{
    this.authService.login(this.myForm.value)
                    .subscribe(()=>{
                      this.router.navigateByUrl('/agenda/home')
                    }, (err)=>{
                      if (err.status === 400) {
                        Swal.fire({
                          toast: true,
                          icon: 'error',
                          iconColor: 'white',
                          title: 'Credenciales invalidas',
                          position: 'top-end',
                          showConfirmButton: false,
                          background: '#f27474',
                          color: 'white',
                          timer: 3000,
                          timerProgressBar: true
                        })
                        return
                      }

                      Swal.fire({
                        toast: true,
                        icon: 'error',
                        iconColor: 'white',
                        title: 'Ocurrio un error inesperado',
                        position: 'top-end',
                        showConfirmButton: false,
                        background: '#f27474',
                        color: 'white',
                        timer: 3000,
                        timerProgressBar: true
                      })
                    })
  }


}
