import { ActivationEnd, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import {map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo?: string;
  public tituloSubs$?:Subscription;
  

  constructor(private router:Router) {
    this.tituloSubs$ = this.getArguments().subscribe(({titulo})=>{

      this.titulo = titulo;
      document.title = `AdminLte - ${titulo}`;

    })
   }

  ngOnDestroy(): void { 

    this.tituloSubs$?.unsubscribe();
    

  }

  getArguments(){

    return this.router.events.pipe(

      filter((event:any) => event instanceof ActivationEnd),
      filter((event:ActivationEnd)=> event.snapshot.firstChild===null),
      map((event:ActivationEnd)=>event.snapshot.data)

      
    );

  }

}
