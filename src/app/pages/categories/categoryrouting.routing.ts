import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllcategoriesComponent } from './Allcategories/Allcategories.component';

const routes: Routes = [
  {
    path: '',
    component: AllcategoriesComponent,
    data: {
      breadcrumb: ' Categories',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All categories',
      status: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class categoriesRoutingmodule { }
