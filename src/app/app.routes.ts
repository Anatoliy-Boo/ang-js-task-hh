import { Routes } from '@angular/router';

import { RestingPlaceComponent } from "./resting-place/resting-place.component";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./products/product/product.component";
import { Page404Component } from "./page404/page404.component";

export const routes: Routes = [
  {
    path: '',
    component: RestingPlaceComponent,
    title: 'Welcome page',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products',
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    title: 'Product information',
  },
  {
    path: '**',
    component: Page404Component,
    title: '404 Not found. Ooops..',
  }
];
