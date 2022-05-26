import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from '../model/order';
import { Item } from '../model/item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient){}

  public getOrders(): Observable<Order[]> {
      return this.http.get<Order[]>('/server/order');
  }

  public addOrder(order: Order){
      let body = JSON.stringify(order);
      return this.http.post('/server/order', body, httpOptions);
  }

  public updateOrder(order: Order){
      return this.http.put('/server/order', order);
  }

}
