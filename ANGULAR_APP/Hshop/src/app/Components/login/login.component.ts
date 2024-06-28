import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule ,ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true
  form: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(): void {
    this.isFormSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    const loginData = this.form.value;
    this.authService.login(loginData.email, loginData.password).subscribe(
      (response) => {
        if (response) {
          alert("Login Successful");
          console.log("User logged in successfully: ", response);
          this.router.navigate(['']).then(() => {
            console.log("Navigation successful");
          });
          this.form.reset();
        } else {
          alert("Invalid email or password");
        }
      },
      (error) => {
        console.error("Error logging in: ", error);
        alert("Error during login");
      }
    );
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
