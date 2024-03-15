import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService, Product } from '../product.service'; 

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  router: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  editProduct(id: number): void {
    this.router.navigate(['/product', id, 'edit']);
    // Implement edit functionality
  }
  addProduct(): void {
    // Implement logic to navigate to the add product page
  }
  deleteProduct(id: number): void {
    // Implement delete functionality
  }
}
