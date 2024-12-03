import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from "jwt-decode";
import { Departamento } from 'src/app/models/departamento';
import { Cargo } from 'src/app/models/cargo';
import { Permissoes } from 'src/app/models/permissoes';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cargo: Cargo[] = [];
  departamento: Departamento[] = []; 
  permis: Permissoes[] = [];

  user: Users ={
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: '',
    telefone: '', 
    cargo: this.cargo,
    departamento: this.departamento,
    permissions: this.permis
  }

  constructor(private service: UserService,
    private toastr: ToastrService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.findByEmail(); 
  }

  findByEmail(): void {
    this.service.findByEmail(this.getDecodedAccessToken(localStorage.getItem('token'))).subscribe(response => {
      console.log(response);  // Verifique a estrutura de 'response'
      this.user = response;
      // Se for um único objeto, converta para um array
      this.cargo = Array.isArray(response.cargo) ? response.cargo : [response.cargo];
      this.departamento = Array.isArray(response.departamento) ? response.departamento : [response.departamento];
  
      console.log(this.cargo);
      console.log(this.departamento);
    });
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token).sub;
    } catch(Error) {
      return null;
   }
  }

  
}

