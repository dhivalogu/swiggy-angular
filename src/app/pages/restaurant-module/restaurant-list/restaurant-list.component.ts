import { Component, OnInit } from '@angular/core';
import * as datas from './mock.json';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: any = (datas as any).default;

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

}
