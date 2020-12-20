import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css']
})
export class OrderitemComponent implements OnInit {
  @Input() name:string='';
  @Input() desc:string='';
  @Input() price:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
