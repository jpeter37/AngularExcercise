import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { JerseyComponent } from './jersey/jersey.component';
import { ShoesComponent } from './shoes/shoes.component';
import { OuterwearComponent } from './outerwear/outerwear.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jersey', component: JerseyComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'outerwear', component: OuterwearComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'account', component: AccountComponent },
  { path: 'customerService', component: CustomerServiceComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}