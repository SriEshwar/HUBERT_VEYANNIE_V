import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
    this.filterProductsByCategory();
  }


  fetchProducts(){
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
        this.loading = false;
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
        stars.push('fa fa-star text-warning');
      }else if(i == Math.ceil(rating) && !Number.isInteger(rating)){
        stars.push('fa fa-star-half-alt text waring');
      }else{
        stars.push('fa fa-star-o text-warning')
      }
    }
    return stars
  }
}
