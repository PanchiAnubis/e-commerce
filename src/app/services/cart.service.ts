import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      id: 2,
      title: 'Una corte de niebla y furia',
      image: 'https://cdn.kemik.gt/2024/10/9788408290964-1200x1200-1.-700x700.jpg',
      price: 200,
      stock: 2
    },
    {
      id: 3,
      title: 'Una corte de alas y ruinas',
      image: 'https://rimage.ripley.cl/home.ripley/Attachment/MKP/2319/MPM10002091854/full_image-1.jpeg',
      price: 300,
      stock: 10
    },
  ]); // Create a signal to store the cart items

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
