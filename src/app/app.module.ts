import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {LoginModuleModule} from './pages/login-module/login-module.module';
import {RestaurantModuleModule} from './pages/restaurant-module/restaurant-module.module';
import {OrderModuleModule} from'./pages/order-module/order-module.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    LoginModuleModule,
    RestaurantModuleModule,
    OrderModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
