import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common'; 
import { dataservice } from '../data.service';

@Component({
  selector: 'app-hitmanhwa',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './hitmanhwa.component.html',
  styleUrl: './hitmanhwa.component.css'
})
export class HitmanhwaComponent implements OnInit {
  alldata: any;

  constructor(private dataService: dataservice) {}

  ngOnInit() {
    this.alldata = this.dataService.datalist;
    console.log(this.alldata);
  }
}
