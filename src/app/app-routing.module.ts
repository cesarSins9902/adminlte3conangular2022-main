import { PerfilComponent } from './pages/perfil/perfil.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes:Routes=[

  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'alumno', component:AlumnosComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'**', component:NopageFoundComponent}

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
