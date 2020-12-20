import { Component, OnInit,Input } from '@angular/core';
import * as datas from '../mock.json';
@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.component.html',
  styleUrls: ['./orderview.component.css']
})
export class OrderviewComponent implements OnInit {
  @Input() id:number=5;
  restaurants: any = (datas as any).default;
  restaurant: any =this.restaurants[this.id].menu;
  constructor() { }

  ngOnInit(): void {
  }

}
