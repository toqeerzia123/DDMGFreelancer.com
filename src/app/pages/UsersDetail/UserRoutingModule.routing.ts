import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './AllUsers/AllUsers.component';
import { UserGigDetailComponent } from './UserGigDetail/UserGigDetail.component';
import { UserOrderDetailComponent } from './UserOrderDetail/UserOrderDetail.component';
import { UserProfileComponent } from './UserProfile/UserProfile.component';

const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent,
    data: {
      breadcrumb: ' Users',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Users',
      status: true
    }
  },
  {
    path: 'UserProfile/:user_id',
    component: UserProfileComponent,
    data: {
      breadcrumb: 'Profile',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'My Profile',
      status: true
    }
  }, {
    path: 'UserGigDetail/:gigId',
    component:UserGigDetailComponent,
    data: {
      breadcrumb: 'Profile',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'My Profile',
      status: true
    }
  },
  {
    path: 'UserOrderDetail/:orderId',
    component:UserOrderDetailComponent,
    data: {
      breadcrumb: 'Profile',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'My Profile',
      status: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingmodule { }
