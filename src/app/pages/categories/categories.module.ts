import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { AllcategoriesComponent } from './Allcategories/Allcategories.component';
import { categoriesRoutingmodule } from './categoryrouting.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../../src/app/shared/shared.module';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import {  MatFormFieldModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSort, MatSortHeader, MatSortModule } from '@angular/material';
import { GetCategoryDto } from '../../../../src/app/Models/GetCategoryDto';
import { categories } from '../../../../src/app/Models/categories';
import { subcategories } from '../../../../src/app/Models/subcategories';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    categoriesRoutingmodule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatTableModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],
  declarations: [CategoriesComponent,AllcategoriesComponent],
  providers: [
     GetCategoryDto,
     categories,
     subcategories,

    ]
})
export class CategoriesModule { }
