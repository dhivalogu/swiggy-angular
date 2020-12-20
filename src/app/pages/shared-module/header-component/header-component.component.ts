import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  ImagePath: string='assets/images/image.jpg'; 
  logo:string='assets/images/logo.png';
  logo2:string='assets/images/logo2.png';

  constructor() { }

  ngOnInit(): void {
  }

}
