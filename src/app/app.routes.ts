import { RouterModule, Routes } from '@angular/router';
import { HitmanhwaComponent } from './hitmanhwa/hitmanhwa.component';
import { NgModule } from '@angular/core';
import { CatagoryComponent } from './catagory/catagory.component';
import { DetailComponent } from './detail/detail.component';
import { ManhwoverviewComponent } from './manhwoverview/manhwoverview.component';
import { ReadingPageComponent } from './reading_page/reading-page.component';

export const routes: Routes = [
        {path:'',redirectTo:'hitmanhwa',pathMatch:'full'},
        {path:'hitmanhwa',component:HitmanhwaComponent},
        {path:'catagory',component:CatagoryComponent},
        {path:'detail',component:ManhwoverviewComponent},
        {path:'reading',component:ReadingPageComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
