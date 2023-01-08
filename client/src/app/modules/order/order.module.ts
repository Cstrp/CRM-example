import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [OrderPageComponent],
  imports: [CommonModule, OrderRoutingModule, SharedModule],
})
export class OrderModule {}
