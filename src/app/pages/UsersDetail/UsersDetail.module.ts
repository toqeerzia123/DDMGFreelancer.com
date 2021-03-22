import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailComponent } from './UsersDetail.component';
import { UsersRoutingmodule } from './UserRoutingModule.routing';
import { AllUsersComponent } from './AllUsers/AllUsers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatTableModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../../src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { UserGigDetailComponent } from './UserGigDetail/UserGigDetail.component';
import { UserOrderDetailComponent } from './UserOrderDetail/UserOrderDetail.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { GigDescription } from '../../../../src/app/Models/GigDescription';
import { Packages } from '../../../../src/app/Models/Packages';
import { GigOffers } from '../../../../src/app/Models/GigOffers';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingmodule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgImageSliderModule,
    MatTabsModule,
    
  ],
  declarations: [UsersDetailComponent,AllUsersComponent,UserProfileComponent,UserGigDetailComponent,UserOrderDetailComponent],
  providers:[GigDescription,Packages,GigOffers]
})
export class UsersDetailModule { }
