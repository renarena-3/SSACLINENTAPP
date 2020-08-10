import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewssnComponent } from './newssn/newssn.component';


const routes: Routes = [
  {
    path:'',
    component:NewssnComponent
    
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsnCreationRoutingModule { }
