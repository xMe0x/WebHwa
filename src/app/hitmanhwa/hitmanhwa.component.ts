import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { dataservice } from '../data.service';

@Component({
  selector: 'app-hitmanhwa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hitmanhwa.component.html',
  styleUrl: './hitmanhwa.component.css'
})
export class HitmanhwaComponent implements OnInit {
  alldata: any;
  activeMenu: string = 'ใหม่';
  constructor(private dataService: dataservice) {}

  ngOnInit() {
    this.alldata = this.dataService.datalist;
    
    console.log(this.alldata);
  }
 

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
  }

  
}
