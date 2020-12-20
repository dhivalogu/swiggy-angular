import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantListComponent} from './pages/restaurant-module/restaurant-list/restaurant-list.component';
import {LoginComponent} from './pages/login-module/login/login.component';
import {OrderpageComponent} from './pages/order-module/orderpage/orderpage.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'orders/:id', component: OrderpageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[RestaurantListComponent,LoginComponent]