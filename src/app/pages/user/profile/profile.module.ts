import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ChangeProfileDto } from '../../../../../src/app/Models/ChangeProfileDto';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
       
    HttpClientModule
  ],
  declarations: [ProfileComponent],
  providers: [
    ChangeProfileDto
  

   ],
})
export class ProfileModule { }
