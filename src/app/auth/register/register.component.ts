import { PersonaIn } from './../../Modelos/persona.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterIn } from 'src/app/Modelos/register.interface';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 /*RegisterForm=new FormGroup({

    curp: new FormControl(''),
    rfc:new FormControl(''),
    nss:new FormControl(''),
    nombre:new FormControl(''),
    apellido_paterno:new FormControl(''),
    apellido_materno:new FormControl(''),
    fecha_nacimiento:new FormControl(''),
    email:new FormControl(''),
    genero:new FormControl(''),
    estado_civil:new FormControl(''),
    tipo_sangre:new FormControl(''),
    status:new FormControl(''),
    requiere_actualizar_domicilio:new FormControl(''),
    requiere_actualizar_bachillerato:new FormControl(''),
    requiere_actualizar_contacto:new FormControl(''),
    requiere_actualizar_contacto_personal:new FormControl(''),
    rh_actualizacion:new FormControl('')




  })*/

  formulario!:FormGroup;

  constructor(private api:ApiService, private router:Router, private fb:FormBuilder) {
    this.crearFormulario();
  }


  ngOnInit(): void {
  }

  get CurpInv(){

    return this.formulario.get('curp')?.invalid && this.formulario.get('curp')?.touched
  }

  get RFCInv(){

    return this.formulario.get('rfc')?.invalid && this.formulario.get('rfc')?.touched
  }

  get NSSInv(){

    return this.formulario.get('nss')?.invalid && this.formulario.get('nss')?.touched
  }

  get NombreInv(){

    return this.formulario.get('nombre')?.invalid && this.formulario.get('nombre')?.touched
  }

  get APPInv(){

    return this.formulario.get('apellido_paterno')?.invalid && this.formulario.get('apellido_paterno')?.touched
  }

  get APMInv(){

    return this.formulario.get('apellido_materno')?.invalid && this.formulario.get('apellido_materno')?.touched
  }

  get FNaInv(){

    return this.formulario.get('fecha_nacimiento')?.invalid && this.formulario.get('fecha_nacimiento')?.touched
  }

  get CorreoInv(){

    return this.formulario.get('email')?.invalid && this.formulario.get('email')?.touched
  }

  get GeneroInv(){

    return this.formulario.get('genero')?.invalid && this.formulario.get('genero')?.touched
  }

  get EsCiInv(){

    return this.formulario.get('estado_civil')?.invalid && this.formulario.get('estado_civil')?.touched
  }

  get TSangreInv(){

    return this.formulario.get('tipo_sangre')?.invalid && this.formulario.get('tipo_sangre')?.touched
  }

  get StatusInv(){

    return this.formulario.get('status')?.invalid && this.formulario.get('status')?.touched
  }

  get DomicilioInv(){

    return this.formulario.get('requiere_actualizar_domicilio')?.invalid && this.formulario.get('requiere_actualizar_domicilio')?.touched
  }

  get BachilleratoInv(){

    return this.formulario.get('requiere_actualizar_bachillerato')?.invalid && this.formulario.get('requiere_actualizar_bachillerato')?.touched
  }

  get ContactoInv(){

    return this.formulario.get('requiere_actualizar_contacto')?.invalid && this.formulario.get('requiere_actualizar_contacto')?.touched
  }

  get ContactoPerInv(){

    return this.formulario.get('requiere_actualizar_contacto_personal')?.invalid && this.formulario.get('requiere_actualizar_contacto_personal')?.touched
  }

  get RHInv(){

    return this.formulario.get('rh_actualizacion')?.invalid && this.formulario.get('rh_actualizacion')?.touched
  }






  crearFormulario(){

    this.formulario=this.fb.group({

    curp:['',[Validators.required, Validators.pattern('^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$')]],
    rfc:['',Validators.required, Validators.pattern('([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$')],
    nss:['',[Validators.required,Validators.minLength(11), Validators.maxLength(11)]],
    nombre:['',Validators.required],
    apellido_paterno:['',Validators.required],
    apellido_materno:['',Validators.required],
    fecha_nacimiento:['',Validators.required],
    email:['',[Validators.required, Validators.pattern('[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    genero:['',Validators.required],
    estado_civil:['',Validators.required],
    tipo_sangre:['',Validators.required],
    status:['', Validators.required],
    requiere_actualizar_domicilio:['',Validators.required],
    requiere_actualizar_bachillerato:['',Validators.required],
    requiere_actualizar_contacto:['',Validators.required],
    requiere_actualizar_contacto_personal:['',Validators.required],
    rh_actualizacion:['',Validators.required],
  })

  }

  postForm(form:RegisterIn, ){
    this.api.postRegister(form).subscribe(data=>{
      this.formulario.value;
      console.log(data)
      this.router.navigate(['/usuarios']);
    })


  }

  limpiar(){

    this.formulario.reset();
  }







}
