import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'episodes', component: EpisodesComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: '/episodes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // ✅ ใช้ RouterModule.forRoot()
  exports: [RouterModule] // ✅ ต้องมี exports
})
export class AppRoutingModule { }
