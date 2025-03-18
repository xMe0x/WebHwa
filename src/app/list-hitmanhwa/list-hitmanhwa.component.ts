import { Component, Input } from '@angular/core';
import { dataservice } from '../data.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-hitmanhwa',
  imports: [RouterLink,CommonModule],
  templateUrl: './list-hitmanhwa.component.html',
  styleUrl: './list-hitmanhwa.component.css'
})
export class ListHitmanhwaComponent {
  alldata: any;
  @Input() activeMenu: string = '';
  constructor(private dataService: dataservice) {}
  ngOnInit() {
    this.alldata = this.dataService.datalist;
    console.log(this.alldata);
  }
}
