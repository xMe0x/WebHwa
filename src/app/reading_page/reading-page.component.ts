import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reading-page',
  imports: [RouterLink],
  templateUrl: './reading-page.component.html',
  styleUrl: './reading-page.component.css'
})
export class ReadingPageComponent {

}
