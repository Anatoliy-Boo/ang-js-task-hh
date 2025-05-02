import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductService } from './product/product.service';

@Component({
  selector: 'app-products',
  imports: [RouterModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent implements OnInit {
  title: string = 'Products list';
  products = [] as any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log("🚀 ~ ProductsComponent  ~ ngOnInit:");
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }
}
