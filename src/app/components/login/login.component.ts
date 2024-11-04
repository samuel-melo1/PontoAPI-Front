import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds?: Credenciais = {
    email: '',
    password: ''
  }
  
  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService, private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    return this.email.valid && this.password.valid;
  }

  logar(){
    this.service.authenticate(this.creds).subscribe(response => {
      this.service.successfullLogin(response.body.accessToken); 
      this.router.navigate(['']); 
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos!'); 
    })
  }

}
