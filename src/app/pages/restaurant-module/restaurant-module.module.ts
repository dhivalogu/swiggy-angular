import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import {SharedModuleModule} from '../shared-module/shared-module.module';

@NgModule({
  declarations: [RestaurantListComponent, RestaurantCardComponent],
  imports: [
    CommonModule,SharedModuleModule
  ],
  exports:
  [RestaurantListComponent],
  bootstrap: [RestaurantListComponent]

})
export class RestaurantModuleModule { }
