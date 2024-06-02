import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../Models/product.model';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  productForm: FormGroup;
  products: Product[] = []
  selectedProduct: Product | null = null;

  constructor(private fb: FormBuilder, private productService: ProductService){
    this.productForm = this.fb.group({
      id: [null, Validators.required],
      productId: [null, Validators.required],
      productSku: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: [null, Validators.required],
      productShortName: ['', Validators.required],
      productDescription: ['', Validators.required],
      createdDate: ['', Validators.required],
      deliveryTimeSpan: ['', Validators.required],
      productImageUrl: ['', Validators.required],
      categoryName: ['', Validators.required],
      rating: [null, Validators.required]
    })
  }
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(){
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  onSubmit() {
    if(this.productForm.valid){
      this.productService.addProduct(this.productForm.value).subscribe(response => {
        console.log("Product added successfully", response);
      }, error => {
        console.error("Error adding product", error)
      });
    }else{
      this.productForm.markAllAsTouched()
    }
  }

  addProduct() {
    this.productService.addProduct(this.productForm.value).subscribe(response => {
      console.log("Product added successfully", response);
      this.loadProducts(); // Refresh the product list
      this.productForm.reset()
    }, error => {
      console.error("Error adding product", error);
    });
  }

  updateProduct() {
    if (this.selectedProduct) {
      const updatedProduct = { ...this.selectedProduct, ...this.productForm.value };
      this.productService.updateProduct(this.selectedProduct.id, this.productForm.value).subscribe(response => {
        console.log("Product updated successfully", response);
        this.loadProducts(); // Refresh the product list
        this.selectedProduct = null; // Reset the form
        this.productForm.reset();
      }, error => {
        console.error("Error updating product", error);
      });
    }
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
    const formattedDate = product.createdDate.split('T')[0]
    this.productForm.patchValue({...product, createdDate: formattedDate});
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log("Product deleted successfully");
      this.loadProducts();
    }, error => {
      console.error("Error deleting product", error);
    });
  }

  cancelEdit() {
    this.selectedProduct = null;
    this.productForm.reset();
  }

}
