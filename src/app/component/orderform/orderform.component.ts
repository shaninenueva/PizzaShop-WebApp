import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/order';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})

export class OrderformComponent {

  item: Item;
  order: Order;
  items: Item[];
  
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private orderService: OrderService,
    private itemService: ItemService) {

      this.order = new Order();
      this.items = [];
  } 

  onSubmit() {
    this.itemService.addItems(this.items);
    this.orderService.addOrder(this.order).subscribe(
      result => this.displayUserForm());
  }

  displayUserForm() {
    this.router.navigate(['/user']);
  }
}
