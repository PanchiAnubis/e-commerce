import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]); // Create a signal to store the cart items

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  constructor() { }
}
