import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  item = input.required<Product>();

}
