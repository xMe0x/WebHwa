import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router'; // ✅ ต้องนำเข้า RouterModule
import { AppRoutingModule } from './app-routing.module'; // ✅ นำเข้า AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // ✅ ต้องมี RouterModule
    AppRoutingModule // ✅ นำเข้า Routing Module เพื่อให้ใช้ router-outlet ได้
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
