import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  products$: Observable<Product[]> | undefined; // Declare products$ as an Observable

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  editProduct(id: number): void {
    // Implement edit functionality
  }

  deleteProduct(id: number): void {
    // Implement delete functionality
  }

}