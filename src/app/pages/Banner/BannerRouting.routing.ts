import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './Banner.component';

const routes: Routes = [
  {
    path: '',
    component: BannerComponent,
    data: {
      breadcrumb: 'Banner',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Banners Detail',
      status: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }
