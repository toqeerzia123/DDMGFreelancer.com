import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './Banner.component';
import { BannerRoutingModule } from './BannerRouting.routing';

@NgModule({
  imports: [
    CommonModule,
    BannerRoutingModule,
    
  ],
  declarations: [BannerComponent]
})
export class BannerModule { }
