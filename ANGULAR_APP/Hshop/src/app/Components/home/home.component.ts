import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/product.model';
import { CartService } from '../../Services/cart.service';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = ['Mobile', 'Headphone', 'Laptop', 'Tablet'];
  selectedCategory: string = '';
  loading: boolean = true;
  error: string = '';

  constructor(private productService: ProductService, private cartService: CartService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.fetchProducts();
    }
    
    
    fetchProducts(){
      this.productService.getProducts().subscribe(
        data => {
          this.products = data;
          this.loading = false;
          this.filterProductsByCategory();
      },
      error => {
        this.error = 'Error fetching products';
        this.loading = false;
        console.error('Error fetching products:', error);
      }
    );
  }

  filterProductsByCategory() {
    if (this.selectedCategory === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.categoryName === this.selectedCategory);
    }
  }

  getStars(rating: number){
    const stars = []
    for(let i=1; i<=5; i++){
      if(i<= rating){
        stars.push('fa-solid fa-star text-warning');
      }else{
        stars.push('fa-solid fa-star-o text-warning')
      }
    }
    return stars
  }
  addToCart(product: Product) {
    if (this.authService.currentUserValue) { 
      this.cartService.addToCart(product);
      alert(`${product.productName} has been added to the cart`);
    } else {
      alert('Please log in to add products to the cart');
      this.router.navigate(['/login']); 
    }
  }
}
