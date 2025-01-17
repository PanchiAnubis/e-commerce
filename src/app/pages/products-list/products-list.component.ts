import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products = signal<Product[]>([{
    id: 1,
    title: 'Una corte de rosas y espinas',
    image: 'https://www.xn--sueosdepapel-chb.cl/cdn/shop/products/portada_una-corte-de-rosas-y-espinas_sarah-j-maas_202109272042.jpg?v=1635189943',
    price: 100,
    stock: 10
  },
  {
    id: 2,
    title: 'Una corte de niebla y furia',
    image: 'https://cdn.kemik.gt/2024/10/9788408290964-1200x1200-1.-700x700.jpg',
    price: 200,
    stock: 0
  },
  {
    id: 3,
    title: 'Una corte de alas y ruinas',
    image: 'https://rimage.ripley.cl/home.ripley/Attachment/MKP/2319/MPM10002091854/full_image-1.jpeg',
    price: 300,
    stock: 5
  }]);  

}
