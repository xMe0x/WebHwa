import { RouterModule, Routes } from '@angular/router';
import { HitmanhwaComponent } from './hitmanhwa/hitmanhwa.component';
import { NgModule } from '@angular/core';
import { CatagoryComponent } from './catagory/catagory.component';

export const routes: Routes = [
        {path:'',redirectTo:'hitmanhwa',pathMatch:'full'},
        {path:'hitmanhwa',component:HitmanhwaComponent},
        {path:'catagory',component:CatagoryComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
