import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from './product';
import { ProductService } from './product.service';
import { AppSupportService } from '../../app.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit, OnDestroy {
  product: Product | undefined;
  title: string = 'Product item';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public appSupportService: AppSupportService,
    private location: Location
  ) {}

  ngOnDestroy(): void {
    this.toggleHeaderMode();
  }

  ngOnInit(): void {
    this.getProduct();
  }

  toggleHeaderMode(): void {
    let result = null;

    this.appSupportService.getHeaderMode()
    .subscribe(serviceRes => {
      result = serviceRes;

      if (result === true) {
        setTimeout(() => {
          this.appSupportService.removeExpandedMode();
        }, 50);
      } else if (result === false) {
        setTimeout(() => {
          this.appSupportService.setExpandedMode();
        }, 50);
      }
    });
  }

  getProduct(): void {
    let id = null;

    if (this.route.snapshot.paramMap.get('id')) {
      id = Number(this.route.snapshot.paramMap.get('id'));
    }

    if (id && typeof id === 'number') {
      this.productService.getProduct(id)
        .subscribe(product => {
          this.product = product;
          this.toggleHeaderMode();
        });
    } else {
      this.product = undefined;
    }
  }

  toBackLocationPath(): void {
    this.location.back();
  }
}
