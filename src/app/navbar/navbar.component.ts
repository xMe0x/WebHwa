import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  activeMenu: string = ''; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveMenuFromPath(); 

    this.router.events.subscribe(() => {
      this.setActiveMenuFromPath();
    });
  }

  setActiveMenuFromPath(): void {
    const currentPath = this.router.url; 
    this.activeMenu = currentPath.replace('/', '');
  }
}
