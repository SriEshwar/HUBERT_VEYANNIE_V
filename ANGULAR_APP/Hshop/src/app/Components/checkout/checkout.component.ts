import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { Router } from '@angular/router';
import { Product } from '../../Models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  cartItems: {product: Product, quantity: number}[] = []
  totalPrice: number = 0
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }


  editCart() {
    this.router.navigate(['/cart']);
  }

  confirmOrder() {
    this.cartService.checkout();
    alert('Order placed successfully!');
    this.router.navigate(['/']);
  }
}
