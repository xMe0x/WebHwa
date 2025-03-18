import { RouterModule, Routes } from '@angular/router';
import { HitmanhwaComponent } from './hitmanhwa/hitmanhwa.component';
import { NgModule } from '@angular/core';
import { CatagoryComponent } from './catagory/catagory.component';
import { DetailComponent } from './detail/detail.component';
import { ManhwoverviewComponent } from './manhwoverview/manhwoverview.component';
import { ReadingPageComponent } from './reading_page/reading-page.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
        {path:'',redirectTo:'/homepage',pathMatch:'full'},
        {path:'hitmanhwa',component:HitmanhwaComponent},
        {path:'catagory',component:CatagoryComponent},
        {path:'detail',component:ManhwoverviewComponent},
        {path:'reading',component:ReadingPageComponent},
        {path:'homepage',component:MainComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
