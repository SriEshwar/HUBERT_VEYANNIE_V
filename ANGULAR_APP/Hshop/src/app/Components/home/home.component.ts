import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
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
}
