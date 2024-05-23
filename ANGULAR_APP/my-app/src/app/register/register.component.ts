import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterOutlet, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  fullName: string = ''
  hide=true;
  password='';

  form: FormGroup;

  isFormSubmitted: boolean = false

  constructor(private authService: AuthService,private http: HttpClient, private router: Router){
    this.form = new FormGroup({
      fullname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      contact: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
    })
  }
  
  onSubmit(): void {

    this.isFormSubmitted = true

    const userData = this.form.value;
    this.http.post('http://localhost:3000/users', userData).subscribe(
      (response) => {
        alert("Registered sucessfully")
        console.log('User registered successfully:', response);
        this.authService.setFullname(this.fullName)
        this.router.navigate(['login']).then(() => {
          console.log('Navigation successful!');
        });
        this.form.reset()
      },
      (error) => {
        console.error('Error registering user:', error);
        alert("Error while registering")
      }
    );
  }
  
 
}


