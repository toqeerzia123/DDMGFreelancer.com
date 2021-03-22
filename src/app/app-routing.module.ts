import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { BasicLoginComponent } from './pages/auth/login/basic-login/basic-login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule),
         canActivate: [AuthGuard]
      }, {
        path: 'basic',
        loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule),
        canActivate: [AuthGuard]
      }, {
        path: 'notifications',
        loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule),
        canActivate: [AuthGuard]
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module')
        .then(m => m.BasicBootstrapModule),
        canActivate: [AuthGuard]
      }, {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
        canActivate: [AuthGuard]
      }, {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
        
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule),
        canActivate: [AuthGuard]
      },
    
      {
        path: 'allproducts', redirectTo: 'products/allproducts', pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'allCategories',
        loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule),
     
      },
      
      {
        path: 'allusers',
        loadChildren: () => import('./pages/UsersDetail/UsersDetail.module').then(m => m.UsersDetailModule)
     
      },
    
    
      {
        path: 'venderDetails', redirectTo: '/allvendors/venderDetails/11', pathMatch: 'full',canActivate: [AuthGuard]
     
      },
    
      {
        path: 'inventory', redirectTo: 'products/inventory', pathMatch: 'full',canActivate: [AuthGuard]
     
     
      }
      , {
        path: 'banner',
        loadChildren: () => import('./pages/Banner/Banner.module').then(m => m.BannerModule)
     
      },
    
   
    ]
  },
 
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
