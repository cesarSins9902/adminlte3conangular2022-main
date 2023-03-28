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

  errorStatus: boolean = true;
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
      if(data.msg=="Inicio de sesión correcto"){
        localStorage.setItem('token',data.token);
        this.router.navigate(['/dashboard']);
      }else{
        this.errorStatus=false;
        this.erroMsj=data.response.error_msg;
      }
    })

  }


}
