import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo:'Dashboard',
    icono:'nav-icon fas fa-tachometer-alt',
    submenu:[

      {titulo:'Grupos', url:'grupos', icono:'fa fa-users'},
      {titulo:'Perfil', url:'perfil', icono:'fas fa-book'},
      {titulo:'ALumno', url:'alumno', icono:'fa fa-users' }


    ]
  }]
}

