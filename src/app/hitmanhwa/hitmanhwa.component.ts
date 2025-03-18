import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { dataservice } from '../data.service';
import { Router, RouterLink } from '@angular/router';
import { ListHitmanhwaComponent } from "../list-hitmanhwa/list-hitmanhwa.component";
@Component({
  selector: 'app-hitmanhwa',
  standalone: true,
  imports: [CommonModule, ListHitmanhwaComponent],
  templateUrl: './hitmanhwa.component.html',
  styleUrl: './hitmanhwa.component.css'
})
export class HitmanhwaComponent implements OnInit {
  alldata: any;
  activeMenu: string = 'ใหม่';
  constructor(private dataService: dataservice) {}
  ngOnInit() {
    this.scrollToTop(); 
    this.alldata = this.dataService.datalist;
    console.log(this.alldata);
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // เลื่อนไปตำแหน่งบนสุด
  }

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
  }

  
}
