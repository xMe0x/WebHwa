import { Component } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';
import { EpisodesComponent } from '../episodes/episodes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manhwoverview',
  imports: [DetailComponent,EpisodesComponent,CommonModule],
  templateUrl: './manhwoverview.component.html',
  styleUrl: './manhwoverview.component.css'
})
export class ManhwoverviewComponent  {
  currentComponent: string = 'EpisodeComponent'; // ค่าเริ่มต้น

  showComponent(componentName: string) {
    this.currentComponent = componentName; // อัปเดตค่าเพื่อสลับ Component
  }
}
