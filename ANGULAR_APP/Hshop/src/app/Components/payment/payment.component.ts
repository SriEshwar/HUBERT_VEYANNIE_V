import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../Services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  cartItems: { product: any, quantity: number }[] = [];
  totalPrice: number = 0;

  constructor(private fb: FormBuilder, private cartService: CartService, private router: Router) {
    this.paymentForm = this.fb.group({
      paymentMethod: ['creditCard', Validators.required],
      nameOnCard: [''],
      cardNumber: [''],
      expiryDate: [''],
      securityCode: [''],
      billingAddressSameAsShipping: [true]
    });

    this.paymentForm.get('paymentMethod')?.valueChanges.subscribe(method => {
      this.updatePaymentValidators(method);
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  confirmOrder() {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }

    // Placeholder: Save payment details and complete order
    console.log('Payment details:', this.paymentForm.value);

    alert('Order placed successfully!');
    this.router.navigate(['/']);
  }

  private updatePaymentValidators(method: string) {
    const nameOnCard = this.paymentForm.get('nameOnCard');
    const cardNumber = this.paymentForm.get('cardNumber');
    const expiryDate = this.paymentForm.get('expiryDate');
    const securityCode = this.paymentForm.get('securityCode');

    if (method === 'creditCard') {
      nameOnCard?.setValidators([Validators.required]);
      cardNumber?.setValidators([Validators.required, Validators.pattern(/^\d{16}$/)]);
      expiryDate?.setValidators([Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]);
      securityCode?.setValidators([Validators.required, Validators.pattern(/^\d{3}$/)]);
    } else {
      nameOnCard?.clearValidators();
      cardNumber?.clearValidators();
      expiryDate?.clearValidators();
      securityCode?.clearValidators();
    }

    nameOnCard?.updateValueAndValidity();
    cardNumber?.updateValueAndValidity();
    expiryDate?.updateValueAndValidity();
    securityCode?.updateValueAndValidity();
  }
}