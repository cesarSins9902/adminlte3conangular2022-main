import { PerfilComponent } from './perfil/perfil.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { GruposComponent } from './grupos/grupos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';

const routes:Routes=[
  {path:'dashboard', component:PagesComponent,
  children:[
    {path:'', component:DashboardComponent, data:{titulo:'Dashboard'}},
    {path:'perfil', component:PerfilComponent, data:{titulo:'Perfil'}},
    {path:'productos', component:ProductosComponent, data:{titulo:'Productos'}},
    {path: 'grupos', component: GruposComponent, data: {titulo:'Grupos'}},
    {path: '', component:AlumnosComponent, data: {titulo:'Alumnos'}}



  ]

},
{path:'usuarios', component:UsuariosComponent},
]


@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
