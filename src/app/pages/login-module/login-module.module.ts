import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports:[
    LoginComponent
  ],
  bootstrap: [LoginComponent]
})
export class LoginModuleModule { }