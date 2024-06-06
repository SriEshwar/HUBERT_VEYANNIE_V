import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  fullName: string = ''
  hide = true;
  password = '';

  form: FormGroup;

  isFormSubmitted: boolean = false

  constructor(private authService: AuthService, private http: HttpClient, private router: Router){
    this.form = new FormGroup({
      fullname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      contact: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
    })
  }
  
  onSubmit(): void {
    this.isFormSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    const userData = this.form.value;
    this.authService.checkUserExiste(userData.email).subscribe(userExists => {
      if(userExists){
        alert("User already exists")
      }else{
        this.authService.registerUser(userData).subscribe(
          (response)=>{
            alert("registered Successfully");
            console.log("User registered successfully: ", response);
            this.router.navigate(['login']).then(()=>{
              console.log("Navigation successful")
            });
            this.form.reset()
          }, (error) =>{
            console.error("Error registering user: ", error);
            alert("Error while registering");
          }
        )
      }
    }, error => {
      console.error("Error checking user existence: ", error);
      alert("Error while checking user existence")
    })
  }
}
