import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

import { CartService } from './../../cart/cart.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [MatToolbarModule, MatButtonModule, RouterLink, MatIconModule]
})
export class HeaderComponent {

  private cartService = inject(CartService);
  cartCount = this.cartService.cartCount;
}
