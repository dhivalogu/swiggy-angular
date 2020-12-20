import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as datas from '../mock.json';
@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {
  id:number=0;
  restaurants: any = (datas as any).default;
  restaurant=this.restaurants[this.id];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }

}
