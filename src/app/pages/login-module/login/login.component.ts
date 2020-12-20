import { Component, OnInit } from '@angular/core';
import { ɵassignExtraOptionsToRouter } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ImagePath: string='assets/images/image.jpg'; 
  logo:string='assets/images/logo.png';
  logo2:string='assets/images/logo2.png';
  sname='lon';
  
  constructor() { }
  

  ngOnInit(): void {
   
      
  }
  
  

}
