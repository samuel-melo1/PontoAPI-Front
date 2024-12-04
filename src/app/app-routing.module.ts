import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { DepartamentoCreateComponent } from './components/configuracoes/departamento-create/departamento-create.component';
import { DepartamentoUpdateComponent } from './components/configuracoes/departamento-update/departamento-update.component';
import { DepartamentoDeleteComponent } from './components/configuracoes/departamento-delete/departamento-delete.component';
import { DepartamentoListComponent } from './components/configuracoes/departamento-list/departamento-list.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', component:HeaderComponent, canActivate:[AuthGuard], children: [
    {path: 'perfil', component:PerfilComponent},

    {path: 'configuracoes/departamentos', component:DepartamentoListComponent},
    {path: 'departamentos/create', component:DepartamentoCreateComponent},
    {path: 'departamentos/update/:id', component:DepartamentoUpdateComponent},
    {path: 'departamentos/delete/:id', component:DepartamentoDeleteComponent}
 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
