import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  @Input() name:string='';
  @Input() cuisines:string='';
  @Input() rating:string='';
  @Input() reviews:string='';
  @Input() image:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
