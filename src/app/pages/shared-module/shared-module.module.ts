import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import {MaterialModule} from './material/material.module'


@NgModule({
  declarations: [HeaderComponentComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:
  [HeaderComponentComponent,
  MaterialModule]
})
export class SharedModuleModule { }
