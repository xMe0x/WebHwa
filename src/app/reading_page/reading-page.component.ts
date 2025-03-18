import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { data } from '../data';

import { dataservice } from '../data.service';

@Component({
  selector: 'app-reading-page',
  imports: [RouterLink],
  templateUrl: './reading-page.component.html',
  styleUrl: './reading-page.component.css'
})
export class ReadingPageComponent implements OnInit{
  ngOnInit() {
    // เลื่อนหน้าไปยังตำแหน่งบนสุดของ body หรือ element ที่ต้องการ
    window.scrollTo(0, 0);
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // เลื่อนไปตำแหน่งบนสุด
  }


}