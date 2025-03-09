import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-reading-page',
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './reading-page.component.html',
  styleUrl: './reading-page.component.css'
})
export class ReadingPageComponent {

}
