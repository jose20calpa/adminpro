import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SitebarComponent,
    HeaderComponent,
  ],
  exports:[
    BreadcrumbsComponent,
    SitebarComponent,
    HeaderComponent,
  ]
  ,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
