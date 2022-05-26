import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService){}

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {this.orders = data})
  }

}
