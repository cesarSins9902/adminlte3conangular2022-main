import { PersonaIn } from './../../Modelos/persona.interface';
import { Injectable } from '@angular/core';
import {LoginIn} from '../../Modelos/login.interface'
import { ResponseIn } from 'src/app/Modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterIn } from 'src/app/Modelos/register.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string=" http://localhost:3000/api"

  constructor(private http:HttpClient) { }

  loginByEmail(form: LoginIn): Observable<ResponseIn>{
    let direccion= this.url + '/login';
    return this.http.post<ResponseIn>(direccion,form);

    /*,({observe:'response'}).subscribe(res=>{
      console.log('token',res.body.response)
    })*/
  }

  //registro de usuariosAlv
  postRegister(form: RegisterIn ): Observable<any>{
    let direccion= this.url + '/registro';
    return this.http.post<any>(direccion,form);
  }

  getUser(id:number):Observable<PersonaIn>{
    //let direccion= this.url + '/api/users';
    let direccion= this.url + '/registro';
    return  this.http.get<PersonaIn>(`${direccion}${id}`);

  }

}
