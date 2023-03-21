import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems?:any[];

  constructor(private SidebarService: SidebarService, private router: Router) {
    this.menuItems=this.SidebarService.menu;
    console.log(this.menuItems)
  }

  ngOnInit(): void {
  }

  logout(){

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
