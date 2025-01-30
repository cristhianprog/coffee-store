import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { CartService } from './../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
    imports: [MatCardModule, MatButtonModule, MatIconModule, AsyncPipe]
})
export class ProductsListComponent {

  private service = inject(ProductsService);
  private cartService = inject(CartService);
  private productServie = inject(ProductsService);
  private snackBar = inject(MatSnackBar);
  

  products$ = this.service.load();

  addProductToCart(product: Product): void {
    this.cartService.addProduct(product);
  }

  deleteProduct(product: Product): void {
    this.productServie.delete(product).subscribe(() => {
      this.snackBar.open('Product deleted successfully!', '', { duration: 3000 });
    });
  }
}
