import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterOutlet, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hide=true;
  password='';

  form: FormGroup;

  isFormSubmitted: boolean = false

  constructor(){
    this.form = new FormGroup({
      fullname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      contact: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
    })
  }
  
  onSubmit(): void{
    this.isFormSubmitted = true


    console.log(JSON.stringify(this.form))
  }
}
