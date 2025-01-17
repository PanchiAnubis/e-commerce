import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsListComponent],
  template: `<app-header></app-header> 
  <app-products-list></app-products-list>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
}
