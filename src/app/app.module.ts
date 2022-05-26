import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { OrderformComponent } from './component/orderform/orderform.component';
import { OrderlistComponent } from './component/orderlist/orderlist.component'
import { FormsModule } from '@angular/forms';
import { OrderService } from './services/order.service';
import { UserformComponent } from './component/userform/userform.component';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderformComponent,
    OrderlistComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OrderService, UserService, ItemService],
  bootstrap: [AppComponent]
})

export class AppModule { }
