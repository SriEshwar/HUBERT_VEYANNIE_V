import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: { product: Product, quantity: number }[] = [];

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: Product) {
    const index = this.items.findIndex(item => item.product.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  updateQuantity(product: Product, quantity: number) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity = quantity;
    }
  }

  getCartItems(): { product: Product, quantity: number }[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.product.productPrice * item.quantity, 0);
  }

  checkout(): boolean {
    // For now, we simply clear the cart and log a message
    this.clearCart();
    console.log('Checkout successful');
    return true;
  }
}
