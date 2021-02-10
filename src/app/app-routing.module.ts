import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const  routes :Routes = [
  
  
  
  {path:'**',component:NopagefoundComponent},


 
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
