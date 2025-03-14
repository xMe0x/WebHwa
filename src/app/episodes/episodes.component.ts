import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-episodes',
  imports: [RouterLink,CommonModule],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent {
  getRange(cout:number){
    return Array.from({ length: cout }, (_, i) => i);
  }
}
