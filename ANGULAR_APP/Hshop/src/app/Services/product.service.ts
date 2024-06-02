import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'http://localhost:3000/products'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get<any>(this.productsUrl)
  }

  getProductsById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.productsUrl}/${id}`)
  }

  addProduct(product: any): Observable<any>{
    return this.http.post<any>(this.productsUrl, product)
  }

  updateProduct(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.productsUrl}/${id}`, product)
  }

  deleteProduct(id: number): Observable<void>{
    return this.http.delete<void>(`${this.productsUrl}/${id}`)
  }
}
