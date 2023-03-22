import { LoginIn } from './../../Modelos/login.interface';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControlName, FormGroup, Validators, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ResponseIn } from 'src/app/Modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    control: new FormControl('', Validators.required),
    alupas: new FormControl('',Validators.required)

  })

  constructor(private api:ApiService, private router:Router) { }

  errorStatus: boolean = false;
  erroMsj: any="";

  ngOnInit(): void {
    this.checkLocalStorage();

  }
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/dashboard']);
    }
  }

  onLogin(form : LoginIn){
    this.api.loginByEmail(form).subscribe(data =>{
      /*this.http.post<ResponseIn>('http://127.0.0.1:8000/login/',form,{observe: 'response'})
      .subscribe(res=>{
        const token= res.body.response;
        console.log(token,'token');
        localStorage.setItem("token",token);
        sessionStorage.setItem("token",token);
        this.router.navigate(['/dashboard']);
      })*/
      console.log(data.user);

      if(data.msg=="Inicio de sesión correcto"){
        localStorage.setItem('token',data.token);
        this.router.navigate(['/dashboard']);
      }else{
        this.errorStatus=true;
        this.erroMsj=data.error.error_msg;
      }
      /*let dataResponse:ResponseIn = data;

      if(dataResponse.message == "OK"){
        localStorage.setItem("token",dataResponse.token);
        this.router.navigate(['/dashboard']);
      }else{
        this.errorStatus=true;
        this.erroMsj=dataResponse.message.error_msg;
      }*/
    })

  }


}
