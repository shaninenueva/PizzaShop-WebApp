import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderlistComponent } from './component/orderlist/orderlist.component';
import { OrderformComponent} from './component/orderform/orderform.component';
import { UserformComponent } from './component/userform/userform.component';

const routes: Routes = [
  { path: 'order/all', component: OrderlistComponent},
  { path: 'order', component: OrderformComponent},
  { path: 'item', component: OrderformComponent},
  { path: 'user', component: UserformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
