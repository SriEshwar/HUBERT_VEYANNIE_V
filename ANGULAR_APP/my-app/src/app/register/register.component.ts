import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
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

  form={
    fullname: '',
    email: '',
    password: '',
    contact: ''
  }
  onSubmit(): void{
    console.log(JSON.stringify(this.form))
  }
}
