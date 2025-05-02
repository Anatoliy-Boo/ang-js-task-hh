import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ToastsService } from '../../toasts/toasts.service';

import { Product } from './product';

/* Curly dev */
import { PRODUCTS } from '../../curly_dev/mock-products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private toastsService: ToastsService) { }

  getProduct(id: number): Observable<Product> {
    let result = undefined;

    if (PRODUCTS.length && id && typeof id === 'number') {
      result = PRODUCTS.find(product => product.id === id)

      if (result) {
        this.toastsService.addToastMes('ProductService: Успешная загрузка');
      }
    }

    return of(result as any);
  }

  getProducts(): Observable<Product[]> {
    if (PRODUCTS.length) {
      this.toastsService.addToastMes('ProductService: Успешная загрузка');
    }

    return of(PRODUCTS);
  }
}
