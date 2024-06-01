import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  productForm: FormGroup;

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

  onSubmit() {
    if(this.productForm.valid){
      this.productService.addProducts(this.productForm.value).subscribe(response => {
        console.log("Product added successfully", response);
      }, error => {
        console.error("Error adding product", error)
      });
    }else{
      this.productForm.markAllAsTouched()
    }
  }

}
