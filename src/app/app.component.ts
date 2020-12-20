import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDC-APP';
  ImagePath: string='assets/images/image.jpg'; 
  logo:string='assets/images/logo.png';
  logo2:string='assets/images/logo2.png';
}
