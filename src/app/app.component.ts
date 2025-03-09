import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { DetailComponent } from './detail/detail.component';
import { CatagoryComponent } from "./catagory/catagory.component";

@Component({
  selector: 'app-root',
  imports: [CatagoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Webhwa';
}
