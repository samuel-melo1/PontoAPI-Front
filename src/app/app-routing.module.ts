import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthGuard } from './auth/auth.guard';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', component:HeaderComponent, canActivate:[AuthGuard], children: [
    {path: 'menu', component:NavComponent, children: [
      {path: 'perfil', component:PerfilComponent}
    ]}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
