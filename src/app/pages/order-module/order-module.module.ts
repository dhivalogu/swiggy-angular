import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderviewComponent } from './orderview/orderview.component';
import { OrderitemComponent } from './orderitem/orderitem.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

import {SharedModuleModule} from '../shared-module/shared-module.module';
import { CartviewComponent } from './cartview/cartview.component';
import { CartitemComponent } from './cartitem/cartitem.component';

@NgModule({
  declarations: [OrderviewComponent, OrderitemComponent, OrderpageComponent, CartviewComponent, CartitemComponent],
  imports: [
    CommonModule,SharedModuleModule
  ],
  exports:[OrderpageComponent]
})
export class OrderModuleModule { }
