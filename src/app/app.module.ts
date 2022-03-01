import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { OuterwearComponent } from './outerwear/outerwear.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { JerseyComponent } from './jersey/jersey.component';
import { ShoesComponent } from './shoes/shoes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    OuterwearComponent,
    AccessoriesComponent,
    CartComponent,
    AccountComponent,
    CustomerServiceComponent,
    JerseyComponent,
    ShoesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }