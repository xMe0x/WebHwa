import { Component } from '@angular/core';
import { dataservice } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
@Component({
  selector: 'app-main',
  imports: [CommonModule,RouterLink,Carousel, ButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
 alldata: any;
  constructor(private dataService: dataservice) {}
  ngOnInit() {
    this.alldata = this.dataService.datalist;
    console.log(this.alldata);
  }

  images=[
    {image:"imagetoon/sliderimage.jpg"},
    {image:"imagetoon/image.png"},
    {image:"imagetoon/63e61f506b171.png"},
  ]
}
