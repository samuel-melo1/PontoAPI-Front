import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  user: Users ={
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: '',
    telefone: '', 
    cargo: '',
    departamento: '',
    permissions: []

  }

  constructor(private service: UserService,
    private toastr: ToastrService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.findByEmail(); 
  }

  findByEmail(): void{
    this.service.findByEmail(this.getDecodedAccessToken(localStorage.getItem('token'))).subscribe(response =>{
      console.log(response);
      this.user = response; 
    })
  }

  getDecodedAccessToken(token: string): any {
  try {
    return jwtDecode(token).sub;
  } catch(Error) {
    return null;
  }
}


}
