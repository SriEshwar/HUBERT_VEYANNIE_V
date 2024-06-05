import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product.model';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: { product: Product, quantity: number }[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
  }

  updateQuantity(product: Product, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(product);
    } else {
      this.cartService.updateQuantity(product, quantity);
      this.cartItems = this.cartService.getCartItems();
    }
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  checkout(){
    alert('checkout')
  }
}
